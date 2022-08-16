import React, { useEffect, useState } from "react";
import Layout from "../../../../Layout";
import { Button, Container } from "@mui/material";
import Iconify from "../../../../components/Iconify";
import ConfirmDialog from "../../../../components/ConFirmDialog";
import Table from "../../../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMedicalData,
  getMedicalList,
} from "../../../../redux/MedicalStore/Action";
import MedicalStoreForm from "./MedicalStoreForm";
import { statusField } from "../../../../components/Constant";

const initialValues = {
  id: "",
  name: "",
  medical_id: "",
  address: "",
  zip_code: "",
  status_id: "",
  status_title: "",
};

const MedicalStore = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [open, setOpen] = useState(false);

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [medicalData, setMedicalData] = useState([]);

  const dispatch = useDispatch();
  const medicalsData = useSelector((state) => state.Medical.medicals);

  useEffect(() => {
    dispatch(getMedicalList());
  }, []);

  useEffect(() => {
    const arr =
      medicalsData.length > 0 &&
      medicalsData.map((item, index) => ({
        id: index + 1,
        name: item.title,
        medical_id: item.id,
        address: item.address,
        zip_code: item.zip_code,
        status_id: item.status,
        status_title:
          statusField[
            statusField.findIndex((status) => status.id === item.status)
          ].title,
      }));
    setMedicalData(arr);
  }, [medicalsData]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setCurrentRow(initialValues);
    setOpen(true);
  };

  const medicalColumn = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
    {
      field: "zip_code",
      headerName: "Zip Code",
      width: 150,
    },
    {
      field: "status_title",
      headerName: "Status",
      width: 150,
    },
    {
      field: "delete",
      headerName: "Delete",
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
    dispatch(deleteMedicalData(row.medical_id));
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
      name: row.name ? row.name : initialValues.name,
      medical_id: row.medical_id ? row.medical_id : initialValues.medical_id,
      address: row.address ? row.address : initialValues.address,
      zip_code: row.zip_code ? row.zip_code : initialValues.zip_code,
      status_title: row.status_id ? row.status_id : initialValues.status_id,
      id: row.id,
    });
    setOpen(true);
  };

  return (
    <>
      <Layout>
        <Container>
          <>
            <Button color="primary" onClick={handleClickOpen}>
              Add MedicalStoreForm
            </Button>
            {open && (
              <MedicalStoreForm
                handleClose={handleClose}
                currentRow={currentRow}
              />
            )}

            <Table columns={medicalColumn} rows={medicalData} />

            <ConfirmDialog
              confirmDialog={confirmDialog}
              setConfirmDialog={setConfirmDialog}
            />
          </>
        </Container>
      </Layout>
    </>
  );
};

export default MedicalStore;
