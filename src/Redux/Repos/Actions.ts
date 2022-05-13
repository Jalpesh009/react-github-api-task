import { reposTypes } from "./ActionTypes";
import { FetchReposFailure, FetchReposFailurePayload, FetchReposRequest, FetchReposSuccess, FetchReposSuccessPayload } from "./Types";

/**
 * request to fetch repos.
 */
export const fetchReposRequest = (payload: string): FetchReposRequest => ({
  type: reposTypes.FETCH_REPOS_REQUEST,
  payload
});

/**
 * when repos response get successfully
 */
export const fetchReposSuccess = (payload: FetchReposSuccessPayload ): FetchReposSuccess => ({
  type: reposTypes.FETCH_REPOS_SUCCESS,
  payload
});

/**
 * when something went wrong with repos.
 */
export const fetchReposFailure = (payload: FetchReposFailurePayload): FetchReposFailure => ({
  type: reposTypes.FETCH_REPOS_ERROR,
  payload
});
