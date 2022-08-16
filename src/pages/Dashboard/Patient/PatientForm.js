import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../../components/Modal";
import { LoadingButton } from "@mui/lab";
import {
  FormProvider,
  RHFTextField,
  RHFDatepicker,
  RHFSelect,
  RHFRadioGroup,
} from "../../../hook-form";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addPatientData,
  updatePatientData,
} from "../../../redux/Patient/Action";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFHijariDatepicker from "../../../hook-form/RHFHijariDatepicker";
import moment from "moment-hijri";
import {
  genderItems,
  phoneRegExp,
  statusField,
} from "../../../components/Constant";

const PatientSchema = Yup.object().shape({
  name_english: Yup.string().required("Name is required"),
  name_arabic: Yup.string().required("Name is required"),
  contact: Yup.string().matches(phoneRegExp, "Contact number is not valid"),
  age: Yup.string().required("Age is required!"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  address_line1: Yup.string().required("Address Line 1 is required"),
  address_line2: Yup.string().required("Address Line 2 is required"),
  city: Yup.string().required("City is required"),
  zip_code: Yup.string()
    .required("Zip Code is required")
    .matches(/^[0-9]+$/, "Zip Code must be only digits")
    .min(5, "Zip Code must be exactly 5 digits"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  date_of_birth: Yup.date().required("Birthdate is required!"),
  gender_title: Yup.number().required("Gender is required!"),
});

const PatientForm = ({ handleClose, currentRow }) => {
  const role_id = useSelector((state) => state.Auth.role_id);
  const defaultValues = currentRow;
  const [doctorData, setDoctorData] = useState([]);
  const doctorsData = useSelector((state) => state.Doctor.doctors);
  useEffect(() => {
    const arr =
      doctorsData.length > 0 &&
      doctorsData.map((item, index) => ({
        id: item.doctor.id,
        title: `${item.first_name} ${item.last_name}`,
      }));
    setDoctorData(arr);
  }, [doctorsData]);

  const methods = useForm({
    resolver: yupResolver(PatientSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let Data = {
      patient_id: data.patient_id,
      role_id: role_id,
      name_english: data.name_english,
      name_arabic: data.name_arabic,
      email: data.email,
      contact: data.contact,
      address_line1: data.address_line1,
      address_line2: data.address_line2,
      city: data.city,
      zip_code: data.zip_code,
      state: data.state,
      country: data.country,
      gender:
        genderItems[
          genderItems.findIndex((status) => status.id === data.gender_title)
        ]?.id,
      date_of_birth: moment(data.date_of_birth).format("YYYY-MM-DD"),
      age: data.age,
    };
    if (data?.id) {
      Data.id = data?.id;
      dispatch(updatePatientData(Data));
      handleClose();
    } else {
      dispatch(addPatientData(Data));
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
            <RHFTextField name="name_english" label="Name in English" />
            <RHFTextField name="name_arabic" label="Name in Arabic" />
            <RHFTextField name="patient_id" label="Patient ID" disabled />
            <RHFSelect
              name="gender_title"
              label="Gender"
              options={genderItems}
            />
            <RHFTextField name="contact" label="Mobile" />
            <RHFHijariDatepicker
              name="date_of_birth"
              label="Birth Date"
              selectedDate={defaultValues.date}
            />
            <RHFTextField name="age" label="Age" />
            <RHFTextField name="email" label="Email" />
            <RHFTextField name="address_line1" label="Address Line 1" />
            <RHFTextField name="address_line2" label="Address Line 2" />
            <RHFTextField name="city" label="City" />
            <RHFTextField name="zip_code" label="Zip Code" />
            <RHFTextField name="state" label="State" />
            <RHFTextField name="country" label="Country" />
           <div className="model-footer">
            <button type='cancel' className="cancel-btn border-btn">
              Cancel
            </button>
            <button type='cancel' className="Save-btn cmn-btn">
              {currentRow.id ? "Update" : "Submit"}
            </button>
          </div>
          </Stack>
        </FormProvider>
      </Modal>
    </>
  );
};

export default PatientForm;
