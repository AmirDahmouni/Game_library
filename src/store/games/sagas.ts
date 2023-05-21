import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchGamesFailure, fetchGamesRequest, fetchGamesSuccess } from "./actions";
import { FETCH_GAMES_REQUEST } from "./actionTypes";
import IGame from "../../entities/Game";
import { FetchGamesRequest } from "./types";
import { FiltersPayload } from "./types";

const getGames = ({ genreId, platformId, sortOrder, searchText, pageParam }: FiltersPayload) => axios.get<IGame[]>(
  "https://api.rawg.io/api/games",
  {
    params: {
      genres: genreId,
      platforms_parent: platformId,
      ordering: sortOrder,
      search: searchText,
      page: pageParam,
    }
  }
);


function* fetchGamesSaga(action: FetchGamesRequest) {
  try {
    yield put(fetchGamesRequest(action.filters))
    const response: AxiosResponse<IGame[]> = yield call(getGames, action.filters);
    console.log(response.data)
    yield put(fetchGamesSuccess({ games: response.data }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchGamesFailure({ error: error.message }));
  }
}

function* gamesSaga() {
  yield all([takeLatest(FETCH_GAMES_REQUEST, fetchGamesSaga)]);
}

export default gamesSaga;