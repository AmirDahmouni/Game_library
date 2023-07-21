import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchGenresFailure, fetchGenresSuccess } from "./actions";
import { FETCH_GENRES_REQUEST } from "./actionTypes";
import IGenre from "../../entities/Genre";

const getGenres = () => axios.get<IGenre[]>("https://api.rawg.io/api/genres?key=8206bb793cbb42d985daa5e03d001766");


function* fetchGenresSaga() {
  try {

    const response: AxiosResponse<IGenre> = yield call(getGenres);
    yield put(fetchGenresSuccess({ genres: response.data.results }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchGenresFailure({ error: error.message }));
  }
}

function* genresSaga() {
  yield all([takeLatest(FETCH_GENRES_REQUEST, fetchGenresSaga)]);
}

export default genresSaga;