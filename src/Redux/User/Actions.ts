import { userTypes } from "./ActionTypes";
import { FetchUserFailure, FetchUserFailurePayload, FetchUserRequest, FetchUserSuccess, FetchUserSuccessPayload } from "./Types";

/**
 * request to fetch searched user's github information.
 */
export const fetchUserRequest = (payload: string): FetchUserRequest => ({
  type: userTypes.FETCH_USER_REQUEST,
  payload
});

/**
 * when github API's response get successfully
 */
export const fetchUserSuccess = (payload: FetchUserSuccessPayload): FetchUserSuccess => ({
  type: userTypes.FETCH_USER_SUCCESS,
  payload
});

/**
 * when something went wrong with Github api.
 */
export const fetchUserFailure = (payload: FetchUserFailurePayload): FetchUserFailure => ({
  type: userTypes.FETCH_USER_ERROR,
  payload
});
