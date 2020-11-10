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

export const register = (account) => {
  return async (dispatch) => {
    try {
      dispatch(setRegisterStateToFetch());
      const result = await axios.post(
        "http://localhost:8081/api/v2/register",
        account
      );
      dispatch(setRegisterStateToSuccess(result.data));
    } catch (e) {
      dispatch(setRegisterStateToFailed({ error: JSON.stringify(e) }));
    }
  };
};
