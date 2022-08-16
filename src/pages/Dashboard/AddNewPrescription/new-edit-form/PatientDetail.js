import { useFormContext } from 'react-hook-form';
import AddressListDialogs from './AddressListDialogs';
import useToggle from '../../../../hook/useToggle';
import Layout from '../../../../Layout';
import Edit from "../../../../assets/images/edit.png";
import { Button } from '@mui/material';
import NewEditDetailsPrescriptions from './NewEditDetailsPrescriptions';

export default function PatientDetail({isSubmitting ,handleSubmit,isEdit }) {
 
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  const { toggle: openFrom, onOpen: onOpenFrom, onClose: onCloseFrom } = useToggle();

  const { From } = values;
  
  const AddressFrom = [
    {
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
    },
    {
      id: "102d",
      BirthDate: "15 May 1999",
      address: "19034 Verna Unions Apt.",
      Age: "12",
      Email: "apxxvdv@oo.com",
      phone: "365-374-4961",
      Gender: "Fele",
      Mobile: "920027299",
      Zipcode: "25365",
      name: "dad",
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
           
          <AddressListDialogs
            open={openFrom}
            onClose={onCloseFrom}
            selected={(selectedId) => From?.id === selectedId}
            onSelect={(address) => setValue('From', address)}
            addressOptions={AddressFrom}
          />
        
            <ul>
              <li>
                Patients ID : <span>{From?.id}</span>
              </li>
              <li>
                Birth Date : <span>{From?.BirthDate}</span>
              </li>
              <li>
                Email : <span>{From?.Email}</span>
              </li>
            </ul>
            <ul>
              <li>
                Patients Name : <span>{From?.name}</span>
              </li>
              <li>
                Age : <span>{From?.Age} Year</span>
              </li>
              <li>
                Address : <span>{From?.address}</span>
              </li>
            </ul>
            <ul>
              <li>
                Gender : <span>{From?.Gender}</span>
              </li>
              <li>
                Mobile No. : <span>{From?.phone}</span>
              </li>
              <li>
                Zip Code : <span>{From?.Zipcode}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Add and Edit */}
        <NewEditDetailsPrescriptions isSubmitting={isSubmitting}handleSubmit={handleSubmit} isEdit={isEdit} />
      </Layout>
    </>
  );
}




