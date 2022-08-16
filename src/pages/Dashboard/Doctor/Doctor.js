import React, { useEffect, useState } from "react";
import ConfirmDialog from "../../../components/ConFirmDialog";
import DoctorForm from "./DoctorForm";
import Table from "../../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoctorData, getDoctorData } from "../../../redux/Doctor/Action";
import { getSpecializationData } from "../../../redux/Specialization/Action";
import moment from "moment-hijri";
import Iconify from "../../../components/Iconify";
import Layout from "../../../Layout";

const initialValues = {
  id: "",
  doctor_id: "",
  name_english: "",
  name_arabic: "",
  email: "",
  contact: "",
  affiliation: "",
  SCFHS_license: "",
  MOH_license: "",
  address: "",
  address_line1: "",
  address_line2: "",
  city: "",
  country: "",
  state: "",
  zip_code: "",
  specialization_title: "",
  specialization_id: "",
  status_id: "",
  status_title: "",
  date: "",
};

const Doctor = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [open, setOpen] = useState(false);

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const [doctorData, setDoctorData] = useState([]);
  const dispatch = useDispatch();
  const doctorsData = useSelector((state) => state.Doctor.doctors);
  const specializations = useSelector(
    (state) => state.Specialization.specializations
  );

  useEffect(() => {
    dispatch(getSpecializationData());
  }, []);

  useEffect(() => {
    const arr =
      doctorsData.length > 0 &&
      doctorsData.map((item, index) => ({
        id: index + 1,
        doctor_id: item.id,
        name_english: item.name_english,
        name_arabic: item.name_arabic,
        email: item.email,
        contact: item.contact,
        affiliation: item.doctor.affiliation,
        SCFHS_license: item.doctor.SCFHS_license,
        MOH_license: item.doctor.MOH_license,
        address: `${item.address.address_line1}, ${item.address.address_line2}, ${item.address.city}, ${item.address.state}, ${item.address.country}`,
        address_line1: item.address.address_line1,
        address_line2: item.address.address_line2,
        state: item.address.state,
        city: item.address.city,
        country: item.address.country,
        zip_code: item.address.zip_code,
        specialization_id: item.doctor.specialization.specialization_id,
        specialization_title:
          specializations[
            specializations.findIndex(
              (specialization) =>
                specialization.id ===
                item.doctor.specialization.specialization_id
            )
          ]?.title,
        date: moment(item.created_at).format("YYYY-MM-DD"),
        status_id: item.status,
      }));
    setDoctorData(arr);
  }, [doctorsData]);

  useEffect(() => {
    dispatch(getDoctorData());
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setCurrentRow(initialValues);
    setOpen(true);
  };

  const doctorColumn = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "super-app-theme--header",
      width: 90,
    },
    {
      field: "name_english",
      headerName: "Name(English)",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "name_arabic",
      headerName: "Name(Arabic)",
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
      headerName: "Contact",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "affiliation",
      headerName: "Affiliation",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "SCFHS_license",
      headerName: "SCFHS License",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "MOH_license",
      headerName: "MOH License",
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
      headerName: "Zipcode",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "specialization_title",
      headerName: "Specialization",
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
        </strong>
      ),
    },
  ];

  const onDelete = (row) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    dispatch(deleteDoctorData(row.doctor_id));
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

  const handleEditClick = (row) => (event) => {
    event.stopPropagation();
    setCurrentRow({
      name_english: row.name_english
        ? row.name_english
        : initialValues.first_name,
      name_arabic: row.name_arabic ? row.name_arabic : initialValues.last_name,
      email: row.email ? row.email : initialValues.email,
      password: row.password ? row.password : initialValues.password,
      contact: row.contact ? row.contact : initialValues.contact,
      affiliation: row.affiliation
        ? row.affiliation
        : initialValues.affiliation,
      SCFHS_license: row.SCFHS_license
        ? row.SCFHS_license
        : initialValues.SCFHS_license,
      MOH_license: row.MOH_license
        ? row.MOH_license
        : initialValues.MOH_license,
      address: row.address ? row.address : initialValues.address,
      address_line1: row.address_line1,
      address_line2: row.address_line2,
      city: row.city,
      state: row.state,
      country: row.country,
      zip_code: row.zip_code ? row.zip_code : initialValues.zip_code,
      specialization_title: row.specialization_id
        ? row.specialization_id
        : initialValues.specialization_id,
      status_title: row.status_id ? row.status_id : initialValues.status_id,
      date: row.date ? row.date : initialValues.date,
      id: row.id,
      doctor_id: row.doctor_id,
    });
    setOpen(true);
  };

  return (
    <>
      <Layout>
        <div class="page-row">
          <div class="titlebox">
            <h2>Doctors</h2>
          </div>
          <div class="custom-btn-grp">
            <a onClick={handleClickOpen} class="add-btn">
              Add Doctor
            </a>
          </div>
        </div>
        <div class="main-table">
          <Table columns={doctorColumn} rows={doctorData} />
        </div>
        {open && (
          <DoctorForm handleClose={handleClose} currentRow={currentRow} />
        )}

        <ConfirmDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </Layout>
    </>
  );
};

export default Doctor;
