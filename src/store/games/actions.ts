import { FETCH_GAMES_REQUEST, FETCH_GAMES_FAILURE, FETCH_GAMES_SUCCESS } from "./actionTypes";
import {
  FetchGamesRequest,
  FetchGamesSuccess,
  FetchGamesSuccessPayload,
  FetchGamesFailure,
  FetchGamesFailurePayload,
} from "./types";

export const fetchGamesRequest = (): FetchGamesRequest => ({
  type: FETCH_GAMES_REQUEST,
});

export const fetchGamesSuccess = (payload: FetchGamesSuccessPayload): FetchGamesSuccess => ({
  type: FETCH_GAMES_SUCCESS,
  payload,
});

export const fetchGamesFailure = (payload: FetchGamesFailurePayload): FetchGamesFailure => ({
  type: FETCH_GAMES_FAILURE,
  payload,
});