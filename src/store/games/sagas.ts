import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchGamesFailure, fetchGamesSuccess } from "./actions";
import { fetchGameSuccess, fetchGameFailure, fetchScreenGameSuccess } from "./actions";
import { FETCH_GAMES_REQUEST, FETCH_GAME_REQUEST, FETCH_SCREEN_GAME_REQUEST } from "./actionTypes";
import IGame from "../../entities/Game";
import { FetchGamesRequest, FetchGameRequest, FetchGameScreensRequest } from "./types";
import IScreenshot from "../../entities/Screenshot"

type filters = {
  genreId: Number | null,
  platformId: Number | null,
  sortOrder: string | null,
  searchText: string | null,
  pageParam: Number | null,
}

const getGames = (filters: filters) => axios.get<IGame[]>(
  "https://api.rawg.io/api/games",
  {
    params: {
      key: "8206bb793cbb42d985daa5e03d001766",
      genres: filters?.genreId,
      platforms: filters?.platformId,
      ordering: filters?.sortOrder,
      search: filters?.searchText,
      page: filters?.pageParam,
    }
  }
);

const getGame = (slug: string) => axios.get<IGame>(
  `https://api.rawg.io/api/games/${slug}`,
  {
    params: {
      key: "8206bb793cbb42d985daa5e03d001766"
    }
  }
)
const getGameScreen = (gameId: string) => axios.get<any[]>(
  `https://api.rawg.io/api/games/${gameId}/screenshots`,
  {
    params: {
      key: "8206bb793cbb42d985daa5e03d001766"
    }
  }
)


function* fetchGamesSaga(action: FetchGamesRequest) {
  const filters = action.payload?.reduce((acc: any, { key, value }) => {
    acc[key] = value;
    return acc;
  }, {});
  try {
    const response: AxiosResponse<IGame[]> = yield call(getGames, filters);
    yield put(fetchGamesSuccess({ games: response.data, nbPages: Math.ceil(response.data.count / 20) }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchGamesFailure({ error: error.message }));
  }
}


function* fetchGameSaga(action: FetchGameRequest) {
  try {
    const response: AxiosResponse<IGame> = yield call(getGame, action.payload.slug);
    yield put(fetchGameSuccess({ game: response.data }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchGameFailure({ error: error.message }));
  }
}

function* fetchScreenShots(action: FetchGameScreensRequest) {
  try {
    const response: AxiosResponse<IScreenshot[]> = yield call(getGameScreen, action.payload.game);
    yield put(fetchScreenGameSuccess({ screens: response.data }));
  } catch (e) {
    const error = e as AxiosError;
    //yield put(fetchScreenFailure({ error: error.message }));
  }
}

function* screenSaga() {
  yield all([takeLatest(FETCH_SCREEN_GAME_REQUEST, fetchScreenShots)]);
}
function* gameSaga() {
  yield all([takeLatest(FETCH_GAME_REQUEST, fetchGameSaga)]);
}

function* gamesSaga() {
  yield all([takeLatest(FETCH_GAMES_REQUEST, fetchGamesSaga)]);
}

export { gamesSaga, gameSaga, screenSaga };