import * as types from "./ActionType";
import {
  addList,
  deleteList,
  getList,
  getPatientID,
  updateList,
} from "../../services/PatientService";

export const getPatientSuccess = (payload) => {
  return { type: types.GET_PATIENT_SUCCESS, payload };
};

export const getPatientFailure = (error) => {
  return { type: types.GET_PATIENT_FAILURE, error };
};

export const getPatientIdSuccess = (payload) => {
  return { type: types.GET_PATIENT_ID_SUCCESS, payload };
};

export const getPatientIdFailure = (error) => {
  return { type: types.GET_PATIENT_ID_FAILURE, error };
};

export const deletePatientSuccess = (payload) => {
  return { type: types.DELETE_PATIENT_SUCCESS, payload };
};

export const deletePatientFailure = (error) => {
  return { type: types.DELETE_PATIENT_FAILURE, error };
};

export const addPatientSuccess = (payload) => {
  return {
    type: types.ADD_PATIENT_SUCCESS,
    payload,
  };
};

export const addPatientFailure = (error) => {
  return {
    type: types.ADD_PATIENT_FAILURE,
    error,
  };
};

export const updatePatientSuccess = (payload) => {
  return { type: types.UPDATE_PATIENT_SUCCESS, payload };
};

export const updatePatientFailure = (error) => {
  return { type: types.UPDATE_PATIENT_FAILURE, error };
};

export const getPatientId = () => {
  return function (dispatch) {
    getPatientID()
      .then((res) => {
        res?.data && dispatch(getPatientIdSuccess(res?.data?.patient_id ));
      })
      .catch((error) => {
        getPatientFailure(error);
      });
  };
};

export const getPatientList = () => {
  return function (dispatch) {
    getList()
      .then((res) => {
        res?.data && dispatch(getPatientSuccess(res?.data?.rows));
      })
      .catch((error) => {
        getPatientFailure(error);
      });
  };
};

export const deletePatientData = (id) => {
  return function (dispatch) {
    deleteList(id)
      .then((res) => {
        dispatch(deletePatientSuccess(res?.data));
        dispatch(getPatientList());
      })
      .catch((error) => {
        deletePatientFailure(error.response.data);
      });
  };
};

export const addPatientData = (data) => {
  return function (dispatch) {
    addList(data)
      .then((res) => {
        dispatch(addPatientSuccess(res?.data));
        dispatch(getPatientList());
      })
      .catch((error) => {
        addPatientFailure(error.response.data);
      });
  };
};

export const updatePatientData = (data) => {
  return function (dispatch) {
    updateList(data)
      .then((res) => {
        dispatch(updatePatientSuccess(res));
        dispatch(getPatientList());
      })
      .catch((error) => {
        updatePatientFailure(error);
      });
  };
};
