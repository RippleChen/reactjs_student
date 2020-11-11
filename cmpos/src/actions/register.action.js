import {
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../constants";

import axios from "axios";

export const setRegisterStateToFetch = () => ({
  type: REGISTER_FETCHING,
});

export const setRegisterStateToSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const setRegisterStateToFailed = (payload) => ({
  type: REGISTER_FAILED,
  payload,
});

export const register = (account, history) => {
  return async (dispatch) => {
    try {
      dispatch(setRegisterStateToFetch());
      const result = await axios.post(
        "http://localhost:8081/api/v2/register",
        account
      );

      debugger;
      if (result.data.result == "ok") {
        dispatch(setRegisterStateToSuccess(result.data.message));
        history.push("/login");
      } else {
        dispatch(setRegisterStateToFailed(result.data.message));
      }
    } catch (e) {
      dispatch(setRegisterStateToFailed(e));
    }
  };
};
