import * as types from "./ActionType";
import { signIn } from "../../services/AuthService";

export const login = (credentials, history) => {
  return {
    type: types.LOGIN,
    credentials,
    history,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = (error) => {
  return {
    type: types.LOGIN_FAILURE,
    error,
  };
};

export const logIn = (data) => {
  return function (dispatch) {
    signIn(data)
      .then((res) => {
        if (res?.data?.token) {
          dispatch(loginSuccess(res.data));
          localStorage.setItem("token", res?.data?.token);
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error));
      });
  };
};

// logout
export const logout = (history) => {
  return {
    type: types.LOGOUT,
    history,
  };
};
export const logoutSuccess = (payload) => {
  return {
    type: types.LOGOUT_SUCCESS,
    payload,
  };
};

export const logoutFailure = (error) => {
  return {
    type: types.LOGOUT_FAILURE,
    error,
  };
};
