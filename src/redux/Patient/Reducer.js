import * as types from "./ActionType";

const initialState = {
  isLoading: true,
  patients: [],
  error: null,
  message: "",
  patient_id: "",
};

export const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        patients: action.payload,
      };

    case types.GET_PATIENT_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.error,
      };
    case types.DELETE_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };

    case types.DELETE_PATIENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case types.ADD_PATIENT_SUCCESS:
      return {
        ...state,
        isAddingTodo: false,
        error: null,
      };

    case types.ADD_PATIENT_FAILURE:
      return {
        ...state,
        isAddingTodo: false,
        patients: [],
        error: action.payload,
      };
    case types.UPDATE_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };

    case types.UPDATE_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case types.GET_PATIENT_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        patient_id : action.payload,
      };

    case types.GET_PATIENT_ID_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.error,
      };

    default:
      return state;
  }
};
