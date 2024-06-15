import {
  USER_FETCHING_REJECT,
  USER_FETCHING_REQUEST,
  USER_FETCHING_SUCCESS,
} from "./userType";

const initialUserState = {
  isLoading: false,
  data: [],
  error: "",
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_FETCHING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_FETCHING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case USER_FETCHING_REJECT:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
