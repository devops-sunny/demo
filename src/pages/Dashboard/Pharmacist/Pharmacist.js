import React, { useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import ConfirmDialog from "../../../components/ConFirmDialog";
import PharmacistForm from "./PharmacistForm";
import Table from "../../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoctorData } from "../../../redux/Doctor/Action";
import { getMedicalList } from "../../../redux/MedicalStore/Action";
import { getPharmacistData } from "../../../redux/Pharmacist/Action";
import moment from "moment-hijri";
import Iconify from "../../../components/Iconify";
import { statusField } from "../../../components/Constant";
import Layout from "../../../Layout";

const initialValues = {
  id: "",
  pharmacist_id: "",
  first_name: "",
  last_name: "",
  password: "",
  email: "",
  contact: "",
  address: "",
  address_line1: "",
  address_line2: "",
  city: "",
  country: "",
  zip_code: "",
  medical_store_id: "",
  medical_store_name: "",
  status_id: "",
  status_title: "",
  date: "",
};

const Pharmacist = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [open, setOpen] = useState(false);

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const [pharmacistData, setPharmacistData] = useState([]);
  const dispatch = useDispatch();

  const pharmacistsData = useSelector((state) => state.Pharmacist.pharmacists);
  const medicalData = useSelector((state) => state.Medical.medicals);

  useEffect(() => {
    dispatch(getPharmacistData());
    dispatch(getMedicalList());
  }, []);

  useEffect(() => {
    const arr =
      medicalData.length > 0 &&
      pharmacistsData.length > 0 &&
      pharmacistsData.map((item, index) => ({
        id: index + 1,
        pharmacist_id: item.id,
        first_name: item.first_name,
        last_name: item.last_name,
        email: item.email,
        password: item.password,
        contact: item.contact,
        address: `${item.address.address_line1}, ${item.address.address_line2}, ${item.address.city}, ${item.address.country}`,
        address_line1: item.address.address_line1,
        address_line2: item.address.address_line2,
        city: item.address.city,
        country: item.address.country,
        zip_code: item.address.zip_code,
        medical_store_id: item.pharmacist.store_id,
        medical_store_name:
          medicalData[
            medicalData.findIndex(
              (medical) => medical.id === item.pharmacist.store_id
            )
          ]?.title,
        date: moment(item.created_at).format("YYYY-MM-DD"),
        status_id: item.status,
        status_title:
          statusField[
            statusField.findIndex((status) => status.id === item.status)
          ].title,
      }));
    setPharmacistData(arr);
  }, [pharmacistsData, medicalData, statusField]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setCurrentRow(initialValues);
    setOpen(true);
  };

  const pharmacistColumn = [
    { field: "id", headerName: "ID",
    headerClassName: "super-app-theme--header", width: 90 },
    {
      field: "first_name",
      headerName: "First Name",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "last_name",
      headerName: "Last Name",
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
      field: "medical_store_name",
      headerName: "Medical Store",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "status_title",
      headerName: "Status",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "delete",
      headerName: "Delete",
      headerClassName: "super-app-theme--header",
      width: 80,
      renderCell: ({ row }) => (
        <strong>
          <Iconify
            icon="ant-design:delete-outlined"
            onClick={handleDeleteClick(row)}
          />
        </strong>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      headerClassName: "super-app-theme--header",
      width: 80,
      renderCell: ({ row }) => (
        <strong>
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
    dispatch(deleteDoctorData(row.pharmacist_id));
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
      first_name: row.first_name ? row.first_name : initialValues.first_name,
      last_name: row.last_name ? row.last_name : initialValues.last_name,
      email: row.email ? row.email : initialValues.email,
      password: row.password ? row.password : initialValues.password,
      contact: row.contact ? row.contact : initialValues.contact,
      address: row.address ? row.address : initialValues.address,
      address_line1: row.address_line1,
      address_line2: row.address_line2,
      city: row.city,
      country: row.country,
      zip_code: row.zip_code ? row.zip_code : initialValues.zip_code,
      medical_store_name: row.medical_store_id
        ? row.medical_store_id
        : initialValues.medical_store_id,
      status_title: row.status_id ? row.status_id : initialValues.status_id,
      date: row.date ? row.date : initialValues.date,
      id: row.id,
      pharmacist_id: row.pharmacist_id,
    });
    setOpen(true);
  };

  return (
    <>

      <Layout>

        <div class="page-row">
          <div class="titlebox">
            <h2>Pharmacists</h2>
          </div>
          <div class="custom-btn-grp">
            <a onClick={handleClickOpen} class="add-btn">Add Pharmacist</a>
          </div>
        </div>
        <div class="main-table">
          <Table columns={pharmacistColumn} rows={pharmacistData} />
        </div>

        {open && (
          <PharmacistForm
            handleClose={handleClose}
            currentRow={currentRow}
          />
        )}

        <ConfirmDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </Layout>

    </>
  );
};

export default Pharmacist;
