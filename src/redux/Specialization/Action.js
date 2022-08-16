import * as types from "./ActionType";
import {
  addSpecialization,
  deleteSpecialization,
  getSpecialization,
  updateSpecialization,
} from "../../services/SpecializationService";

export const getSpecializationSuccess = (payload) => {
  return { type: types.GET_SPECIALIZATION_SUCCESS, payload };
};

export const getSpecializationFailure = (error) => {
  return { type: types.GET_SPECIALIZATION_FAILURE, error };
};

export const addSpecializationSuccess = (payload) => {
  return { type: types.ADD_SPECIALIZATION_SUCCESS, payload };
};

export const addSpecializationFailure = (error) => {
  return { type: types.ADD_SPECIALIZATION_FAILURE, error };
};

export const updateSpecializationSuccess = (payload) => {
  return { type: types.UPDATE_SPECIALIZATION_SUCCESS, payload };
};

export const updateSpecializationFailure = (error) => {
  return { type: types.UPDATE_SPECIALIZATION_FAILURE, error };
};

export const deleteSpecializationSuccess = (payload) => {
  return { type: types.DELETE_SPECIALIZATION_SUCCESS, payload };
};

export const deleteSpecializationFailure = (error) => {
  return { type: types.DELETE_SPECIALIZATION_FAILURE, error };
};

export const getSpecializationData = () => {
  return function (dispatch) {
    getSpecialization()
      .then((res) => {
        res?.data && dispatch(getSpecializationSuccess(res?.data));
      })
      .catch((error) => {
        getSpecializationFailure(error.response.data.error);
      });
  };
};

export const addSpecializationData = (data) => {
  return function (dispatch) {
    addSpecialization(data)
      .then((res) => {
        dispatch(addSpecializationSuccess(res));
        dispatch(getSpecializationData());
      })
      .catch((error) => {
        getSpecializationFailure(error.response.data.error);
      });
  };
};

export const updateSpecializationData = (data) => {
  return function (dispatch) {
    updateSpecialization(data)
      .then((res) => {
        dispatch(updateSpecializationSuccess(res));
        dispatch(getSpecializationData());
      })
      .catch((error) => {
        updateSpecializationFailure(error);
      });
  };
};

export const deleteSpecializationData = (id) => {
  return function (dispatch) {
    deleteSpecialization(id)
      .then((res) => {
        dispatch(deleteSpecializationSuccess(res?.data));
        dispatch(getSpecializationData());
      })
      .catch((error) => {
        deleteSpecializationFailure(error.response.data);
      });
  };
};
