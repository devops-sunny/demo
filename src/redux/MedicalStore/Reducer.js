import * as types from "./ActionType";

const initialState = {
  isLoading: true,
  medicals: [],
  error: null,
  message: "",
};

export const  medicalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MEDICAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        medicals: action.payload,
      };

    case types.GET_MEDICAL_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.error,
      };
    case types.DELETE_MEDICAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };

    case types.DELETE_MEDICAL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case types.ADD_MEDICAL_SUCCESS:
      return {
        ...state,
        isAddingTodo: false,
        error: null,
      };

    case types.ADD_MEDICAL_FAILURE:
      return {
        ...state,
        isAddingTodo: false,
        medicals: [],
        error: action.payload,
      };
      case types.UPDATE_MEDICAL_SUCCESS:
        return {
          ...state,
          isLoading: false,
          message: action.payload.message,
        };
  
      case types.UPDATE_MEDICAL_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
    default:
      return state;
  }
};
