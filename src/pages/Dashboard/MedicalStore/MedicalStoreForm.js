import React from "react";
import Modal from "../../../../components/Modal";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { FormProvider, RHFTextField, RHFSelect } from "../../../../hook-form";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addMedicalData,
  updateMedicalData,
} from "../../../../redux/MedicalStore/Action";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { phoneRegExp, statusField } from "../../../../components/Constant";

const MedicalStoreSchema = Yup.object().shape({
  name: Yup.string().required("First Name is required"),
  address: Yup.string().required("Address is required"),
  zip_code: Yup.string()
    .required("Zip Code is required")
    .matches(/^[0-9]+$/, "Zip Code must be only digits")
    .min(5, "Zip Code must be exactly 5 digits"),
  status_title: Yup.number().required("Status is required"),
});

const MedicalStoreForm = ({ handleClose, currentRow }) => {
  const defaultValues = currentRow;
  const methods = useForm({
    resolver: yupResolver(MedicalStoreSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let Data = {
      title: data.name,
      address: data.address,
      zip_code: data.zip_code,
      status:
        statusField[
          statusField.findIndex((status) => status.id === data.status_title)
        ].id,
    };

    if (data?.medical_id) {
      Data.id = data?.medical_id;
      dispatch(updateMedicalData(Data));
      handleClose();
    } else {
      dispatch(addMedicalData(Data));
      handleClose();
    }
  };

  return (
    <>
      <Modal
        title={currentRow.id ? "Update Data" : "Create Data"}
        onCancel={handleClose}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <RHFTextField name="name" label="name" />
            <RHFTextField name="address" label="Address" />
            <RHFTextField name="zip_code" label="ZipCode" />
            <RHFSelect
              name="status_title"
              label="status"
              options={statusField}
            />
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

export default MedicalStoreForm;
