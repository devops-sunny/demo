import PropTypes from "prop-types";
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Card, Stack } from "@mui/material";
import { FormProvider } from "../../../../hook-form";
import PatientDetail from "./PatientDetail";
import { string, object, array } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

InvoiceNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentrowData: PropTypes.object,
};

const formSchema = {
  TypeofConsultation: string().required("TypeofConsultation is required"),
  selectMedicine: string().required("selectMedicine is required"),
  Dose: string().required("Dose is required"),
  Ius: string().required("Ius is required"),
  writeInstructions: string().required("writeInstructions is required"),
  NumberDose: string().required("NumberDose is required"),
  Durations: string().required("Durations is required"),
  TotalQuantity: string().required("TotalQuantity is required"),
  startDate: string().required("startDate is required"),
  EndDate: string().required("EndDate is required"),
  RoutOfAdministration: string().required("RoutOfAdministration is required"),
  Refill: string().required("Refill is required"),
  comment: string().required("comment is required"),
};

const schema = object({
  items: array().of(object().shape(formSchema)),
  PhysicalRemarks: Yup.string().required("PhysicalRemarks is required")
});

export default function InvoiceNewEditForm({ isEdit  ,currentrowData }) {
  const navigate = useNavigate();

  // const currentrowData = {
  //   PhysicalRemarks: "bvb",
  //   From: {
  //     id: "100",
  //     BirthDate: "15 May 1999",
  //     address: "19034 Verna Unions Apt.",
  //     Age: "12",
  //     Email: "apxx@yahoo.com",
  //     phone: "365-374-4961",
  //     Gender: "Female",
  //     Mobile: "920027299",
  //     Zipcode: "25365",
  //     name: "dhrupad",
  //   },
  //   items: [
  //     {
  //       id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
  //       Dose: "cdcd",
  //       Durations: "Paracetamol",
  //       EndDate: "2022-08-21",
  //       Ius: "dsdc",
  //       NumberDose: "sdvsd",
  //       Refill: "sdcvs",
  //       RoutOfAdministration: "Paracetamol",
  //       TotalQuantity: "dv",
  //       TypeofConsultation: "d'cold",
  //       comment: "sdv",
  //       selectMedicine: "d'cold",
  //       startDate: "2022-08-14",
  //       writeInstructions: "dvs",
  //     },
  //     {
  //       id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
  //       Dose: "cdcd",
  //       Durations: "Paracetamol",
  //       EndDate: "2022-08-21",
  //       Ius: "dsdc",
  //       NumberDose: "sdvsd",
  //       Refill: "sdcvs",
  //       RoutOfAdministration: "Paracetamol",
  //       TotalQuantity: "dv",
  //       TypeofConsultation: "d'cold",
  //       comment: "sdv",
  //       selectMedicine: "d'cold",
  //       startDate: "2022-08-14",
  //       writeInstructions: "dvs",
  //     },
  //   ],
  // }

  const data ={
    id: "100",
    BirthDate: "15 May 1999",
    address: "19034 Verna Unions Apt.",
    Age: "12",
    Email: "apxx@yahoo.com",
    phone: "365-374-4961",
    Gender: "Female",
    Mobile: "920027299",
    Zipcode: "25365",
    name: "dhrupad",
  }

  const defaultValues = useMemo(
    () => ({
      PhysicalRemarks: currentrowData?.PhysicalRemarks || "",
      From: currentrowData?.From || data,
      items: currentrowData?.items || [
        {
          TypeofConsultation: "",
          selectMedicine: "",
          Dose: "",
          Ius: "",
          writeInstructions: "",
          NumberDose: "",
          Durations: "",
          TotalQuantity: "",
          startDate: "",
          EndDate: "",
          RoutOfAdministration: "",
          Refill: "",
          comment: "",
        },
      ],
    }),
    [currentrowData]
  );

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    reset,
    watch,
    errors,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (currentrowData) {
      reset(defaultValues);
    }
  }, [currentrowData]);

 
  return (
    
    <FormProvider methods={methods}>
      <Card>
        <PatientDetail  isSubmitting={isSubmitting} isEdit={isEdit} handleSubmit={handleSubmit} />
      </Card>
    </FormProvider>
  );
}
