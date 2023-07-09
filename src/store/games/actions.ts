import {
  FETCH_GAMES_REQUEST, FETCH_GAMES_FAILURE, FETCH_GAMES_SUCCESS, UPDATE_GAMES_FILTERS,
  FETCH_GAME_REQUEST, FETCH_GAME_FAILURE, FETCH_GAME_SUCCESS,
} from "./actionTypes";
import {
  FetchGamesRequest,
  FetchGamesSuccess,
  FetchGamesSuccessPayload,
  FetchGamesFailure,
  FetchGamesFailurePayload,
  UpdateGamesFilters,
  FetchGameRequest,
  FetchGameSuccess,
  FetchGameSuccessPayload,
  FetchGameFailure,
  FetchGameFailurePayload
} from "./types";


export const fetchGamesRequest = (payload: { key: string, value: string }[]): FetchGamesRequest => ({
  type: FETCH_GAMES_REQUEST,
  payload
});

export const fetchGamesSuccess = (payload: FetchGamesSuccessPayload): FetchGamesSuccess => ({
  type: FETCH_GAMES_SUCCESS,
  payload,
});

export const fetchGamesFailure = (payload: FetchGamesFailurePayload): FetchGamesFailure => ({
  type: FETCH_GAMES_FAILURE,
  payload,
});

export const fetchGameRequest = (payload: string): FetchGameRequest => ({
  type: FETCH_GAME_REQUEST,
  payload
});

export const fetchGameSuccess = (payload: FetchGameSuccessPayload): FetchGameSuccess => ({
  type: FETCH_GAME_SUCCESS,
  payload,
});

export const fetchGameFailure = (payload: FetchGameFailurePayload): FetchGameFailure => ({
  type: FETCH_GAME_FAILURE,
  payload,
});

export const updateGamesFilters = (filter: string, value: Number | string): UpdateGamesFilters => ({
  type: UPDATE_GAMES_FILTERS,
  filter,
  value
})