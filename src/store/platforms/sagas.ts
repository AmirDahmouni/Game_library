import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchPlatformsFailure, fetchPlatformsSuccess } from "./actions";
import { FETCH_PLATFORMS_REQUEST } from "./actionTypes";
import { IPlatformResponse } from "../../entities/Platform";

const getPlatforms = () => axios.get<IPlatformResponse[]>(`${import.meta.env.VITE_URL_API}/platforms/lists/parents`, {
  params: {
    key: import.meta.env.VITE_KEY_API
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