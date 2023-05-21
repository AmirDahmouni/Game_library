import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchPlatformsFailure, fetchPlatformsSuccess } from "./actions";
import { FETCH_PLATFORMS_REQUEST } from "./actionTypes";
import IPlatform from "../../entities/Platform";

const getPlatforms = () => axios.get<IPlatform[]>("https://api.rawg.io/api/platforms/lists/parents");


function* fetchPlatformsSaga() {
  try {

    const response: AxiosResponse<IPlatform[]> = yield call(getPlatforms);
    yield put(fetchPlatformsSuccess({ platforms: response.data }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchPlatformsFailure({ error: error.message }));
  }
}

function* platformsSaga() {
  yield all([takeLatest(FETCH_PLATFORMS_REQUEST, fetchPlatformsSaga)]);
}

export default platformsSaga;