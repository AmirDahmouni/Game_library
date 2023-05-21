import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
  UPDATE_GAMES_FILTERS
} from "./actionTypes";
import IGame from "../../entities/Game";

export interface GamesState {
  pending: boolean;
  games: IGame[];
  filters: { string: number | string }[];
  error: string | null;
}

export interface FetchGamesSuccessPayload {
  games: IGame[];
}

export interface FetchGamesFailurePayload {
  error: string;
}


export interface FetchGamesRequest {
  type: typeof FETCH_GAMES_REQUEST;
  filters: FiltersPayload
}

export interface UpdateGamesFilters {
  type: typeof UPDATE_GAMES_FILTERS;
  filter: string;
  value: string;
}

export type FetchGamesSuccess = {
  type: typeof FETCH_GAMES_SUCCESS;
  payload: FetchGamesSuccessPayload;
};

export type FetchGamesFailure = {
  type: typeof FETCH_GAMES_FAILURE;
  payload: FetchGamesFailurePayload;
};

export type FiltersPayload = {
  genreId: number,
  platformId: number,
  sortOrder: string,
  searchText: string,
  pageParam: number,
}

export type GamesActions =
  | FetchGamesRequest
  | FetchGamesSuccess
  | FetchGamesFailure
  | UpdateGamesFilters
  ;