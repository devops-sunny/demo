import * as types from "./ActionType";

const initialState = {
  isLoading: true,
  specializations: [],
  error: null,
  message: "",
};

export const specializationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SPECIALIZATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        specializations: action.payload,
      };

    case types.GET_SPECIALIZATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.ADD_SPECIALIZATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };

    case types.ADD_SPECIALIZATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.UPDATE_SPECIALIZATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };

    case types.UPDATE_SPECIALIZATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.DELETE_SPECIALIZATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };

    case types.DELETE_SPECIALIZATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
