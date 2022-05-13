import { IUser } from "../../Models/Interface";
import { userTypes } from "./ActionTypes";

export interface UserState {
    userInformation: IUser;
    error: string | null;
}

export interface FetchUserSuccessPayload {
    userInformation: IUser;
}

export interface FetchUserFailurePayload {
  error: string;
}

export interface FetchUserRequest {
  type: typeof userTypes.FETCH_USER_REQUEST;
  payload: string;
}

export type FetchUserSuccess = {
  type: typeof userTypes.FETCH_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type FetchUserFailure = {
  type: typeof userTypes.FETCH_USER_ERROR;
  payload: FetchUserFailurePayload;
};

export type UserActions =
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure;
