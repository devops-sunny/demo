import * as types from "./ActionType";

const initialState = {
  isLoading: true,
  doctors: [],
  error: null,
  message: "",
};

export const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DOCTOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        doctors: action.payload,
      };

    case types.GET_DOCTOR_FAILURE:
      return {
        ...state,
        isLoading: false,
        // error: action.error,
      };

    case types.ADD_DOCTOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };

    case types.ADD_DOCTOR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.UPDATE_DOCTOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };

    case types.UPDATE_DOCTOR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.DELETE_DOCTOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };

    case types.DELETE_DOCTOR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
