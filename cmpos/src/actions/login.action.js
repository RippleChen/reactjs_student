import {
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  server,
} from "../constants";
import { httpClient } from "./../utils/HttpClient";
import jwt from "jsonwebtoken";

export const setLoginStateToFetch = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginStateToSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setLoginStatetoFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});

export const setLoginStateToLogout = () => ({
  type: LOGOUT,
});

export const login = (value, history) => {
  return async (dispatch) => {
    dispatch(setLoginStateToFetch());

    const result = await httpClient.post(server.LOGIN_URL, value);
    if (result.data.result == "ok") {
      // backup token
      const { token, refreshToken } = result.data;
      localStorage.setItem(server.TOKEN_KEY, token);
      localStorage.setItem(server.REFRESH_TOKEN_KEY, refreshToken);

      dispatch(setLoginStateToSuccess("Login successfully"));
      history.push("/stock");
    } else {
      dispatch(setLoginStatetoFailed("Login failed"));
    }
  };
};

export const logout = (history) => {
  return (dispatch) => {
    localStorage.removeItem(server.TOKEN_KEY);
    localStorage.removeItem(server.REFRESH_TOKEN_KEY);
    dispatch(setLoginStateToLogout());
    history.push("/login");
  };
};

export const isLoggedIn = () => {
  let token = localStorage.getItem(server.TOKEN_KEY);
  if (token) {
    var decodedToken = jwt.decode(token, { complete: true });
    var dateNow = new Date();

    if (decodedToken.exp < dateNow.getTime()) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

export const reLogin = () => {
  return (dispatch) => {
    dispatch(setLoginStateToSuccess({}));
  };
};
