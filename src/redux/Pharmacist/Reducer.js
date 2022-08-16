import * as types from "./ActionType";

const initialState = {
  isLoading: true,
  pharmacists: [],
  error: null,
  message: "",
};

export const pharmacistReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PHARMACIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pharmacists: action.payload,
      };

    case types.GET_PHARMACIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.ADD_PHARMACIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };

    case types.ADD_PHARMACIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.UPDATE_PHARMACIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };

    case types.UPDATE_PHARMACIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.DELETE_PHARMACIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };

    case types.DELETE_PHARMACIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
