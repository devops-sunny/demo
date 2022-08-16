import React, { useEffect, useState } from "react";
import PatientForm from "./PatientForm";
import ConfirmDialog from "../../../components/ConFirmDialog";
import Table from "../../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorData } from "../../../redux/Doctor/Action";
import {
  deletePatientData,
  getPatientId,
  getPatientList,
} from "../../../redux/Patient/Action";
import moment from "moment-hijri";
import { genderItems, statusField } from "../../../components/Constant";
import Iconify from "../../../components/Iconify";
import Layout from "../../../Layout";

const initialValues = {
  index: "",
  id: "",
  patient_id: "",
  name_english: "",
  name_arabic: "",
  gender_id: "",
  gender_title: "",
  date_of_birth: "",
  email: "",
  contact: "",
  age: "",
  address: "",
  address_line1: "",
  address_line2: "",
  city: "",
  country: "",
  zip_code: "",
  state: "",
  date: "",
};

const Patient = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [open, setOpen] = useState(false);

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [patientData, setPatientData] = useState([]);

  const dispatch = useDispatch();
  const patientsData = useSelector((state) => state.Patient.patients);
  const patient_id = useSelector((state) => state.Patient.patient_id);
  useEffect(() => {
    dispatch(getDoctorData());
    dispatch(getPatientList());
  }, []);
  dispatch(getPatientId());

  useEffect(() => {
    const arr =
      patientsData?.length > 0 &&
      patientsData.map((item, index) => ({
        index: index + 1,
        id: item.id,
        patient_id: item.patient.patient_id,
        name_english: item.name_english,
        name_arabic: item.name_arabic,
        age: item.patient.age,
        gender_id: item.patient.gender,
        gender_title:
          genderItems[
            genderItems.findIndex((gender) => gender.id === item.patient.gender)
          ]?.title,
        date_of_birth: moment(item.patient.date_of_birth).format("YYYY-MM-DD"),
        email: item.email,
        contact: item.contact,
        address: `${item.address.address_line1}, ${item.address.address_line2}, ${item.address.city}, ${item.address.state}, ${item.address.country}`,
        address_line1: item.address.address_line1,
        address_line2: item.address.address_line2,
        city: item.address.city,
        country: item.address.country,
        state: item.address.state,
        zip_code: item.address.zip_code,
        date: moment(item.created_at).format("YYYY-MM-DD"),
      }));
    setPatientData(arr);
  }, [patientsData]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    dispatch(getPatientId());
    initialValues.patient_id = patient_id;
    setCurrentRow(initialValues);
    setOpen(true);
  };

  const patientColumn = [
    {
      field: "index",
      headerName: "ID",
      headerClassName: "super-app-theme--header",
      width: 90,
    },
    {
      field: "name_english",
      headerName: "Name in English",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "name_arabic",
      headerName: "Name in Arabic",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "gender_title",
      headerName: "Gender",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "date_of_birth",
      headerName: "Birth Date",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "contact",
      headerName: "Mobile",
      headerClassName: "super-app-theme--header",
      width: 150,
    },

    {
      field: "address",
      headerName: "Address",
      headerClassName: "super-app-theme--header",
      width: 300,
    },
    {
      field: "zip_code",
      headerName: "Zip Code",
      headerClassName: "super-app-theme--header",
      width: 150,
    },

    {
      field: "date",
      headerName: "Created Date",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      headerClassName: "super-app-theme--header",
      width: 80,
      renderCell: ({ row }) => (
        <strong>
          <Iconify
            icon="ant-design:delete-outlined"
            onClick={handleDeleteClick(row)}
          />
          <Iconify icon="akar-icons:edit" onClick={handleEditClick(row)} />
          <Iconify
            icon="ant-design:info-circle-outlined"
            onClick={handleEditClick(row)}
          />
        </strong>
      ),
    },
  ];

  const onDelete = (row) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    dispatch(deletePatientData(row.id));
  };

  const handleDeleteClick = (row) => (event) => {
    event.stopPropagation();
    setConfirmDialog({
      isOpen: true,
      title: "Are you sure to delete this record?",
      subTitle: "You can't undo this operation",
      onConfirm: () => {
        onDelete(row);
      },
    });
  };

  const func = (id) => {
    const data =
      patientsData[patientsData.findIndex((data) => data.id === id)].patient
        .patient_id;
    return data;
  };

  const handleEditClick = (row) => (event) => {
    event.stopPropagation();
    row.patient_id = func(row.id);
    setCurrentRow({
      name_english: row.name_english
        ? row.name_english
        : initialValues.first_name,
      name_arabic: row.name_arabic ? row.name_arabic : initialValues.last_name,
      patient_id: row.patient_id ? row.patient_id : initialValues.patient_id,
      age: row.age ? row.age : initialValues.password,
      gender_title: row.gender_id ? row.gender_id : initialValues.gender_id,
      date_of_birth: row.date_of_birth
        ? row.date_of_birth
        : initialValues.date_of_birth,
      email: row.email ? row.email : initialValues.email,
      contact: row.contact ? row.contact : initialValues.contact,
      address: row.address ? row.address : initialValues.address,
      address_line1: row.address_line1,
      address_line2: row.address_line2,
      city: row.city,
      zip_code: row.zip_code ? row.zip_code : initialValues.zip_code,
      state: row.state,
      country: row.country,
      date: row.date ? row.date : initialValues.date,
      index: row.index,
      id: row.id ? row.id : initialValues.id,
    });
    setOpen(true);
  };
   
  return (
    <>
      <Layout>
        <div className="page-row">
          <div className="titlebox">
            <h2>Patients</h2>
            <div className="top-search">
              <form action="">
                <input type="text" placeholder="Search Here" />
                <input
                  type="submit"
                  className="cmn-btn"
                  value="Search"
                  name="Search"
                />
              </form>
            </div>
          </div>
          <div className="custom-btn-grp">
            <a onClick={handleClickOpen} className="add-btn">
              Add Patient
            </a>
          </div>
        </div>
        <div className="main-table">
          <Table columns={patientColumn} rows={patientData} />
        </div>

        {open && (
          <PatientForm handleClose={handleClose} currentRow={currentRow} />
        )}

        <ConfirmDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </Layout>
    </>
  );
};

export default Patient;
