import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchPlatformsFailure, fetchPlatformsSuccess } from "./actions";
import { FETCH_PLATFORMS_REQUEST } from "./actionTypes";
import { IPlatformResponse } from "../../entities/Platform";

const getPlatforms = () => axios.get<IPlatformResponse[]>("https://api.rawg.io/api/platforms/lists/parents", {
  params: {
    key: "8206bb793cbb42d985daa5e03d001766"
  }
});


function* fetchPlatformsSaga() {
  try {

    const response: AxiosResponse<IPlatformResponse> = yield call(getPlatforms);
    yield put(fetchPlatformsSuccess({ platforms: response.data.results }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchPlatformsFailure({ error: error.message }));
  }
}

function* platformsSaga() {
  yield all([takeEvery(FETCH_PLATFORMS_REQUEST, fetchPlatformsSaga)]);
}

export default platformsSaga;