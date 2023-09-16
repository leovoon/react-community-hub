import { fork } from "redux-saga/effects";
import { watchGetRepositories } from "../features/repositories/repositoriesSaga";

export function* rootSaga() {
  yield fork(watchGetRepositories);
}
