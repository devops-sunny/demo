import { combineReducers } from "redux";
import authReducer from "./Auth/Reducer";
import commonReducer from "./common/Reducer";
import { doctorReducer } from "./Doctor/Reducer";
import { medicalReducer } from "./MedicalStore/Reducer";
import { patientReducer } from "./Patient/Reducer";
import { pharmacistReducer } from "./Pharmacist/Reducer";
import { specializationReducer } from "./Specialization/Reducer";

const rootReducer = combineReducers({
  Auth: authReducer,
  Doctor: doctorReducer,
  Patient: patientReducer,
  Specialization: specializationReducer,
  Pharmacist: pharmacistReducer,
  Medical: medicalReducer,
  Common: commonReducer,
});

export default rootReducer;
