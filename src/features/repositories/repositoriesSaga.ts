import { call, put, select, takeLatest, cancelled } from "redux-saga/effects";
import {
  getRepositoriesSuccessAction,
  getRepositoriesFailureAction,
  selectRepositoriesState,
} from "./repositories";
import api from "../../app/services/api";
import {
  GET_REPOSITORIES,
  RepositoriesResult,
  RepositoriesSearchParams,
  RepositoriesState,
} from "./types";
import { AxiosResponse, isAxiosError } from "axios";

export const fetchRepositories = (
  url: string,
  data: RepositoriesSearchParams,
  signal: AbortSignal
) => {
  return new Promise((resolve, reject) => {
    api
      .get(url, { params: data, signal: signal })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export function* getRepositoriesSaga() {
  const repositories: RepositoriesState = yield select(selectRepositoriesState);
  const { searchQuery } = repositories;

  const params = {
    q: `${searchQuery} org:reactjs in:name`,
    order: "desc",
    page: 1,
    per_page: 10,
  };

  const controller = new AbortController();
  try {
    const response: AxiosResponse<RepositoriesResult> = yield call(
      fetchRepositories,
      "search/repositories",
      params,
      controller.signal
    );

    yield put(getRepositoriesSuccessAction(response.data.items));
  } catch (e) {
    if (isAxiosError(e)) {
      yield put(getRepositoriesFailureAction(e.message));
    } else {
      const error = e as Error;
      yield put(getRepositoriesFailureAction(error.message));
      console.error(error);
    }
  } finally {
    const cancel: boolean = yield cancelled();
    if (cancel) {
      controller.abort();
    }
  }
}

export function* watchGetRepositories() {
  yield takeLatest([GET_REPOSITORIES], getRepositoriesSaga);
}
