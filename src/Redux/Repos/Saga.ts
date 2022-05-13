import { axiosGet } from '../../Utils/AxiosHelper';
import { all, put, takeLatest } from "redux-saga/effects";
import { reposTypes } from "./ActionTypes";
import { fetchReposFailure, fetchReposSuccess } from "./Actions";
import { ResponseGenerator } from '../../Models/Interface';

/**
 * Request to get github repos
 */
function* fetchReposSaga({payload}: any) {
  try {
    const response: ResponseGenerator  = yield axiosGet( `users/${payload}/repos`);
    yield put(
        fetchReposSuccess({
        repos: response.data
      })
    );
  } catch (e: any) {
    yield put(
      fetchReposFailure({
        error: e.message
      })
      
    );
  }
}

function* reposSaga() {
  yield all([takeLatest(reposTypes.FETCH_REPOS_REQUEST, fetchReposSaga)]);
}

export default reposSaga;
