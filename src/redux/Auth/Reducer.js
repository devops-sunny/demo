import * as types from "./ActionType";

const initialState = {
  isLoggingIn: false,
  isAuthenticating: false,
  isLoggingOut: false,
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
  role: "",
  role_id:""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggingIn: true,
        error: null,
      };
    case types.LOGIN_SUCCESS:
     
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        isLoggingIn: false,
        token: action.payload.token,
        role: action.payload.role_name,
        role_id:action.payload.role_id,
        error: null,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.error,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticating: false,
        isLoggingOut: false,
        user: null,
        token: null,
        isAuthenticated: false,
        error: null,
        role: "",
        role_id:""
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        user: null,
        token: null,
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
