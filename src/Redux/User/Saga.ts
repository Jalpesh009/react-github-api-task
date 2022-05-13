import { axiosGet } from '../../Utils/AxiosHelper';
import { all, put, takeLatest } from "redux-saga/effects";
import { userTypes } from "./ActionTypes";
import { fetchUserFailure, fetchUserSuccess } from "./Actions";
import { fetchReposRequest } from '../Repos/Actions';
import { ResponseGenerator } from '../../Models/Interface';

/**
 * Request to get github details
 */
function* fetchUserSaga({payload}: any) {
  try {
    const response: ResponseGenerator  = yield axiosGet( `users/${payload}`);
    yield put(
      fetchUserSuccess({
        userInformation: response.data
      })
    );
    yield put(
      fetchReposRequest(payload)
    );
  } catch (e: any) {
    yield put(
      fetchUserFailure({
        error: e.message
      })
      
    );
  }
}

function* userSaga() {
  yield all([takeLatest(userTypes.FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;
