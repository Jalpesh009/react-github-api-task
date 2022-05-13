import { all } from 'redux-saga/effects';
import userSaga from './User/Saga';
import reposSaga from "./Repos/Saga";

export function* rootSaga() {
  yield all([
    userSaga(),
    reposSaga()
  ]);
}
