import {
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../constants";

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
  return (dispatch) => {
    dispatch(setRegisterStateToFetch());

    setTimeout(() => {
      dispatch(setRegisterStateToSuccess([1, 2, 3, 4]));
    }, 3000);

    //setRegisterStateToFailed({ error });
  };
};
