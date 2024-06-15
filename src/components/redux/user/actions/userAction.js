import axios from "axios";
import {
  USER_FETCHING_REJECT,
  USER_FETCHING_REQUEST,
  USER_FETCHING_SUCCESS,
} from "../userType";

export const fetchingUser = () => {
  return (dispatch) => {
    dispatch({ type: USER_FETCHING_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        dispatch({ type: USER_FETCHING_SUCCESS, payload: response.data })
      )
      .catch((err) => dispatch({ type: USER_FETCHING_REJECT, payload: err.message }));
  };
};
