import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchGamesFailure, fetchGamesRequest, fetchGamesSuccess } from "./actions";
import { FETCH_GAMES_REQUEST } from "./actionTypes";
import IGame from "../../entities/Game";

const getGames = () => axios.get<IGame[]>("https://jsonplaceholder.typicode.com/todos");


function* fetchGamesSaga() {
  try {
    yield put(fetchGamesRequest())
    const response: AxiosResponse<IGame[]> = yield call(getGames);
    yield put(fetchGamesSuccess({ games: response.data, }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchGamesFailure({ error: error.message }));
  }
}

function* gamesSaga() {
  yield all([takeLatest(FETCH_GAMES_REQUEST, fetchGamesSaga)]);
}

export default gamesSaga;