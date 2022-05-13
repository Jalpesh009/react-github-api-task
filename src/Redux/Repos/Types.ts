import { IRepos } from "../../Models/Interface";
import { reposTypes } from "./ActionTypes";

export interface ReposState {
    repos: IRepos[];
    error: string | null;
}

export interface FetchReposSuccessPayload {
  repos: IRepos[];
}

export interface FetchReposFailurePayload {
  error: string;
}

export interface FetchReposRequest {
  type: typeof reposTypes.FETCH_REPOS_REQUEST;
  payload: string;
}

export type FetchReposSuccess = {
  type: typeof reposTypes.FETCH_REPOS_SUCCESS;
  payload: FetchReposSuccessPayload;
};

export type FetchReposFailure = {
  type: typeof reposTypes.FETCH_REPOS_ERROR;
  payload: FetchReposFailurePayload;
};

export type ReposActions =
  | FetchReposRequest
  | FetchReposSuccess
  | FetchReposFailure;
