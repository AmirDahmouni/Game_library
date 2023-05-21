import { FETCH_GAMES_REQUEST, FETCH_GAMES_FAILURE, FETCH_GAMES_SUCCESS, UPDATE_GAMES_FILTERS } from "./actionTypes";
import {
  FetchGamesRequest,
  FetchGamesSuccess,
  FetchGamesSuccessPayload,
  FetchGamesFailure,
  FetchGamesFailurePayload,
  UpdateGamesFilters
} from "./types";
import { FiltersPayload } from "./types";

export const fetchGamesRequest = (filters: FiltersPayload): FetchGamesRequest => ({
  type: FETCH_GAMES_REQUEST,
  filters,
});

export const fetchGamesSuccess = (payload: FetchGamesSuccessPayload): FetchGamesSuccess => ({
  type: FETCH_GAMES_SUCCESS,
  payload,
});

export const fetchGamesFailure = (payload: FetchGamesFailurePayload): FetchGamesFailure => ({
  type: FETCH_GAMES_FAILURE,
  payload,
});

export const updateGamesFilters = (filter: string, value: string): UpdateGamesFilters => ({
  type: UPDATE_GAMES_FILTERS,
  filter,
  value
})