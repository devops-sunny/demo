import * as types from "./ActionType";
import {
  addDoctor,
  deleteDoctor,
  getDoctor,
  updateDoctor,
} from "../../services/DoctorService";

export const getDoctorSuccess = (payload) => {
  return { type: types.GET_DOCTOR_SUCCESS, payload };
};

export const getDoctorFailure = (error) => {
  return { type: types.GET_DOCTOR_FAILURE, error };
};

export const addDoctorSuccess = (payload) => {
  return { type: types.ADD_DOCTOR_SUCCESS, payload };
};

export const addDoctorFailure = (error) => {
  return { type: types.ADD_DOCTOR_FAILURE, error };
};

export const updateDoctorSuccess = (payload) => {
  return { type: types.UPDATE_DOCTOR_SUCCESS, payload };
};

export const updateDoctorFailure = (error) => {
  return { type: types.UPDATE_DOCTOR_FAILURE, error };
};

export const deleteDoctorSuccess = (payload) => {
  return { type: types.DELETE_DOCTOR_SUCCESS, payload };
};

export const deleteDoctorFailure = (error) => {
  return { type: types.DELETE_DOCTOR_FAILURE, error };
};

export const getDoctorData = () => {
  return function (dispatch) {
    getDoctor()
      .then((res) => {
        res?.data?.rows && dispatch(getDoctorSuccess(res?.data?.rows));
      })
      .catch((error) => {
        // getDoctorFailure(error.response.data.error);
      });
  };
};

export const addDoctorData = (data) => {
  return function (dispatch) {
    addDoctor(data)
      .then((res) => {
        dispatch(addDoctorSuccess(res));
        dispatch(getDoctorData());
      })
      .catch((error) => {
        getDoctorFailure(error.response.data.error);
      });
  };
};

export const updateDoctorData = (data) => {
  return function (dispatch) {
    updateDoctor(data)
      .then((res) => {
        dispatch(updateDoctorSuccess(res));
        dispatch(getDoctorData());
      })
      .catch((error) => {
        updateDoctorFailure(error);
      });
  };
};

export const deleteDoctorData = (id) => {
  return function (dispatch) {
    deleteDoctor(id)
      .then((res) => {
        dispatch(deleteDoctorSuccess(res?.data));
        dispatch(getDoctorData());
      })
      .catch((error) => {
        deleteDoctorFailure(error.response.data);
      });
  };
};
