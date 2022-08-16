import React, { useState } from "react";
import Layout from "../../../../Layout";
import Edit from "../../../../assets/images/edit.png";
import AddressListDialogDialog from "./AddressListDialog";
import useToggle from "../../../../hook/useToggle";
import { Button } from "@mui/material";




function PatientDetail() {
  
  const { toggle: openFrom, onOpen: onOpenFrom, onClose: onCloseFrom } = useToggle();
  
  const [data, setData] = useState({
    "id": "100",
    "BirthDate": "15 May 1999",
    "address": "19034 Verna Unions Apt.",
    "Age": "12",
    "Email": "apxx@yahoo.com",
    "phone": "365-374-4961",
    "Gender":"Female",
    "Mobile":"920027299",
    "Zipcode":"25365",
    "name":"dhrupad"
  });

  const AddressFrom = [
    {
        "id": "100",
        "BirthDate": "15 May 1999",
        "address": "19034 Verna Unions Apt. 164",
        "Age": "12",
        "Email": "nannie_abernathy70@yahoo.com",
        "phone": "365-374-4961",
        "Gender":"Female",
        "Mobile":"920027299",
        "Zipcode":"25365",
        "name":"dhrupad"
    },
    {
        "id": "200",
        "BirthDate": "15 May 1988",
        "address": "19034 Verna Unions Apt",
        "Age": "14",
        "Email": "nathy70@yahoo.com",
        "phone": "365-375-4961",
        "Gender":"Female",
        "Mobile":"920027299",
        "Zipcode":"25365",
        "name":"yash"
    },
  ]

  return (
    <>
      <Layout>
        {" "}
        <div className="page-row">
          <div className="titlebox">
            <h2>Patients Details</h2>
          </div>
          <div className="custom-btn-grp">
            <a href="#" className="add-btn">
              Add New Prescription
            </a>
          </div>
        </div>
        <div className="white-box">
          <div className="patients-details">
            
          <Button size="small" className="edit"  onClick={onOpenFrom}>
          <img src={Edit} alt="edit"/>
          </Button>

            <AddressListDialogDialog
            open={openFrom}
            onClose={onCloseFrom}
            selected={(selectedId) => "100"  === selectedId}
            onSelect={(address) => setData(address)}
            addressOptions={AddressFrom}
           />
        
            <ul>
              <li>
                Patients ID : <span>{data?.id}</span>
              </li>
              <li>
                Birth Date : <span>{data?.BirthDate}</span>
              </li>
              <li>
                Email : <span>{data?.Email}</span>
              </li>
            </ul>
            <ul>
              <li>
                Patients Name : <span>{data?.name}</span>
              </li>
              <li>
                Age : <span>{data?.Age} Year</span>
              </li>
              <li>
                Address : <span>{data?.address}</span>
              </li>
            </ul>
            <ul>
              <li>
                Gender : <span>{data?.Gender}</span>
              </li>
              <li>
                Mobile No. : <span>{data?.phone}</span>
              </li>
              <li>
                Zip Code : <span>{data?.Zipcode}</span>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default PatientDetail;
