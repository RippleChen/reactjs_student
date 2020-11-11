
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

export const login = (value, history) => {
  return async (dispatch) => {};
};
