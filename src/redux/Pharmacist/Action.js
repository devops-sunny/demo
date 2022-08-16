import * as types from "./ActionType";
import {
  addPharmacist,
  deletePharmacist,
  getPharmacist,
  updatePharmacist,
} from "../../services/PharmacistService";

export const getPharmacistSuccess = (payload) => {
  return { type: types.GET_PHARMACIST_SUCCESS, payload };
};

export const getPharmacistFailure = (error) => {
  return { type: types.GET_PHARMACIST_FAILURE, error };
};

export const addPharmacistSuccess = (payload) => {
  return { type: types.ADD_PHARMACIST_SUCCESS, payload };
};

export const addPharmacistFailure = (error) => {
  return { type: types.ADD_PHARMACIST_FAILURE, error };
};

export const updatePharmacistSuccess = (payload) => {
  return { type: types.UPDATE_PHARMACIST_SUCCESS, payload };
};

export const updatePharmacistFailure = (error) => {
  return { type: types.UPDATE_PHARMACIST_FAILURE, error };
};

export const deletePharmacistSuccess = (payload) => {
  return { type: types.DELETE_PHARMACIST_SUCCESS, payload };
};

export const deletePharmacistFailure = (error) => {
  return { type: types.DELETE_PHARMACIST_FAILURE, error };
};

export const getPharmacistData = () => {
  return function (dispatch) {
    getPharmacist()
      .then((res) => {
        res?.data && dispatch(getPharmacistSuccess(res?.data));
      })
      .catch((error) => {
        getPharmacistFailure(error.response.data.error);
      });
  };
};

export const addPharmacistData = (data) => {
  return function (dispatch) {
    addPharmacist(data)
      .then((res) => {
        dispatch(addPharmacistSuccess(res));
        dispatch(getPharmacistData());
      })
      .catch((error) => {
        getPharmacistFailure(error.response.data.error);
      });
  };
};

export const updatePharmacistData = (data) => {
  return function (dispatch) {
    updatePharmacist(data)
      .then((res) => {
        dispatch(updatePharmacistSuccess(res));
        dispatch(getPharmacistData());
      })
      .catch((error) => {
        updatePharmacistFailure(error);
      });
  };
};

export const deletePharmacistData = (id) => {
  return function (dispatch) {
    deletePharmacist(id)
      .then((res) => {
        dispatch(deletePharmacistSuccess(res?.data));
        dispatch(getPharmacistData());
      })
      .catch((error) => {
        deletePharmacistFailure(error.response.data);
      });
  };
};
