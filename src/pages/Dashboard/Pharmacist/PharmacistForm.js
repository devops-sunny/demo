import React, { useEffect } from "react";
import Modal from "../../../components/Modal"
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { FormProvider, RHFTextField, RHFSelect } from "../../../hook-form";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMedicalList } from "../../../redux/MedicalStore/Action";
import {
  addPharmacistData,
  updatePharmacistData,
} from "../../../redux/Pharmacist/Action";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { phoneRegExp, statusField } from "../../../components/Constant";

const PharmacistSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  contact: Yup.string().matches(phoneRegExp, "Contact number is not valid"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
  address_line1: Yup.string().required("Address Line 1 is required"),
  address_line2: Yup.string().required("Address Line 2 is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  zip_code: Yup.string()
    .required("Zip Code is required")
    .matches(/^[0-9]+$/, "Zip Code must be only digits")
    .min(5, "Zip Code must be exactly 5 digits"),
  medical_store_name: Yup.number().required("Medical Store is required"),
  status_title: Yup.number().required("Status is required"),
});

const PharmacistForm = ({ handleClose, currentRow }) => {
  const defaultValues = currentRow;
  const dispatch = useDispatch();
  const role_id = useSelector((state) => state.Auth.role_id);
  const medicalData = useSelector((state) => state.Medical.medicals);

  const methods = useForm({
    resolver: yupResolver(PharmacistSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    dispatch(getMedicalList());
  }, []);

  const onSubmit = (data) => {
    let Data = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      contact: data.contact,
      address_line1: data.address_line1,
      address_line2: data.address_line2,
      city: data.city,
      country: data.country,
      zip_code: data.zip_code,
      status:
        statusField[
          statusField.findIndex((status) => status.id === data.status_title)
        ].id,
      role_id: role_id,
      store_id: data.medical_store_name,
    };
    if (data.pharmacist_id) {
      Data.id = data.pharmacist_id;
      dispatch(updatePharmacistData(Data));
      handleClose();
    } else {
      dispatch(addPharmacistData(Data));
      handleClose();
    }
  };

  return (
    <>
      <Modal
        title={currentRow.id ? "Update Data" : "Create Data"}
        onCancel={handleClose}
        loading={isSubmitting}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <RHFTextField name="first_name" label="First Name" />
            <RHFTextField name="last_name" label="Last Name" />
            <RHFTextField name="email" label="Email" />
            <RHFTextField name="password" label="Password" />
            <RHFTextField name="contact" label="Contact" />
            <RHFTextField name="address_line1" label="Address Line 1" />
            <RHFTextField name="address_line2" label="Address Line 1" />
            <RHFTextField name="city" label="City" />
            <RHFTextField name="country" label="Country" />
            <RHFTextField name="zip_code" label="ZipCode" />
            <RHFSelect
              name="medical_store_name"
              label="Medical Store"
              options={medicalData}
            />
            <RHFSelect
              name="status_title"
              label="Status"
              options={statusField}
            />
          </Stack>
          <div className="model-footer">
            <button type='cancel' className="cancel-btn border-btn">
              Cancel
            </button>
            <button type='cancel' className="Save-btn cmn-btn">
              {currentRow.id ? "Update" : "Submit"}
            </button>
          </div>
        </FormProvider>
      </Modal>
    </>
  );
};

export default PharmacistForm;
