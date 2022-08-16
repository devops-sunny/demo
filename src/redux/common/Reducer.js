import * as types from "./ActionType";

const initialState = {
  isNavExpanded: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_NAV_EXPANDED:
      return {
        ...state,
        isNavExpanded: !state.isNavExpanded,
      };

    default:
      return state;
  }
};

export default commonReducer;
