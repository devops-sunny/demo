import * as types from "./ActionType";
import { addMedicalList, deleteMedicalList, getMedicalsList, updateMedicalList } from "../../services/MedicalStore";

export const getMedicalSuccess = (payload) => {
  return { type: types.GET_MEDICAL_SUCCESS, payload };
};

export const getMedicalFailure = (error) => {
  return { type: types.GET_MEDICAL_FAILURE, error };
};

export const deleteMedicalSuccess = (payload) => {
  return { type: types.DELETE_MEDICAL_SUCCESS, payload };
};

export const deleteMedicalFailure = (error) => {
  return { type: types.DELETE_MEDICAL_FAILURE, error };
};

export const addMedicalSuccess = (payload) => {
  return {
    type: types.ADD_MEDICAL_SUCCESS,
    payload,
  };
};

export const addMedicalFailure = (error) => {
  return {
    type: types.ADD_MEDICAL_FAILURE,
    error,
  };
};

export const updateMedicalSuccess = (payload) => {
  return { type: types.UPDATE_MEDICAL_SUCCESS, payload };
};

export const updateMedicalFailure = (error) => {
  return { type: types.UPDATE_MEDICAL_FAILURE, error };
};

export const getMedicalList = () => {
  return function (dispatch) {
    getMedicalsList()
      .then((res) => {
        res?.data && dispatch(getMedicalSuccess(res?.data));
      })
      .catch((error) => {
        getMedicalFailure(error);
      });
  };
};


export const deleteMedicalData = (id) => {
  return function (dispatch) {
    deleteMedicalList(id)
      .then((res) => {
       dispatch(deleteMedicalSuccess(res?.data))
       dispatch(getMedicalList());
      })
      .catch((error) => {
        deleteMedicalFailure(error.response.data);
      });
  };
};


export const addMedicalData = (data) => {
  return function (dispatch) {
    addMedicalList(data)
      .then((res) => {
       dispatch(addMedicalSuccess(res?.data))
       dispatch(getMedicalList());
      })
      .catch((error) => {
        addMedicalFailure(error.response.data);
      });
  };
};

export const updateMedicalData = (data) => {
  return function (dispatch) {
    updateMedicalList(data)
      .then((res) => {
        dispatch(updateMedicalSuccess(res));
        dispatch(getMedicalList());
      })
      .catch((error) => {
        updateMedicalFailure(error);
      });
  };
};