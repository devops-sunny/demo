import React, { useEffect } from "react";
import Modal from "../../../components/Modal";
import { useForm } from "react-hook-form";
import { FormProvider, RHFTextField, RHFSelect } from "../../../hook-form";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addDoctorData, updateDoctorData } from "../../../redux/Doctor/Action";
import { getSpecializationData } from "../../../redux/Specialization/Action";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { phoneRegExp } from "../../../components/Constant";

const DoctorSchema = Yup.object().shape({
  name_english: Yup.string().required("Name is required"),
  name_arabic: Yup.string().required("Name is required"),
  contact: Yup.string().matches(phoneRegExp, "Contact number is not valid"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),

  affiliation: Yup.string().required("Affiliation is required"),
  SCFHS_license: Yup.string().required("SCFHS License is required"),
  MOH_license: Yup.string().required("MOH License is required"),
  address_line1: Yup.string().required("Address Line 1 is required"),
  address_line2: Yup.string().required("Address Line 2 is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  zip_code: Yup.string()
    .required("Zip Code is required")
    .matches(/^[0-9]+$/, "Zip Code must be only digits")
    .min(5, "Zip Code must be exactly 5 digits"),
  specialization_title: Yup.number().required("Specialization is required"),
});

const DoctorForm = ({ handleClose, currentRow }) => {
  const defaultValues = currentRow;
  const dispatch = useDispatch();
  const role_id = useSelector((state) => state.Auth.role_id);
  const specializations = useSelector(
    (state) => state.Specialization.specializations
  );

  useEffect(() => {
    dispatch(getSpecializationData());
  }, []);

  const methods = useForm({
    resolver: yupResolver(DoctorSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    let Data = {
      role_id: role_id,
      name_english: data.name_english,
      name_arabic: data.name_arabic,
      email: data.email,
      contact: data.contact,
      affiliation: data.affiliation,
      SCFHS_license: data.SCFHS_license,
      MOH_license: data.MOH_license,
      address_line1: data.address_line1,
      address_line2: data.address_line2,
      city: data.city,
      state: data.state,
      country: data.country,
      zip_code: data.zip_code,
      specialization_id: data.specialization_title,
      specialization_title:
        specializations[
          specializations.findIndex(
            (specialization) => specialization.id === data.specialization_title
          )
        ].title,
      status: 1,
    };

    if (data.doctor_id) {
      Data.id = data.doctor_id;
      dispatch(updateDoctorData(Data));
      handleClose();
    } else {
      Data.doctor_id = `DR${Math.floor(1000 + Math.random() * 90000)}`;
      dispatch(addDoctorData(Data));

      handleClose();
    }
  };

  return (
    <>
      <Modal
        title={currentRow.id ? "Update Data" : " Add Doctor "}
        onCancel={handleClose}
        loading={isSubmitting}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <RHFTextField name="name_english" label="Name in English" />
            <RHFTextField name="name_arabic" label="Name in Arabic" />
            <RHFTextField name="email" label="Email" />
            <RHFTextField name="contact" label="Contact" />
            <RHFSelect
              name="specialization_title"
              label="Specialization"
              options={specializations}
            />
            <RHFTextField name="affiliation" label="Affiliation" />
            <RHFTextField name="SCFHS_license" label="SCFHS License" />
            <RHFTextField name="MOH_license" label="MOH License" />
            <RHFTextField name="address_line1" label="Address Line 1" />
            <RHFTextField name="address_line2" label="Address Line 2" />
            <RHFTextField name="city" label="City" />
            <RHFTextField name="state" label="State" />
            <RHFTextField name="country" label="Country" />
            <RHFTextField name="zip_code" label="ZipCode" />
          </Stack>
          <div className="model-footer">
            <button type="cancel" className="cancel-btn border-btn">
              Cancel
            </button>
            <button type="cancel" className="Save-btn cmn-btn">
              {currentRow.id ? "Update" : "Submit"}
            </button>
          </div>
        </FormProvider>
      </Modal>
    </>
  );
};

export default DoctorForm;
