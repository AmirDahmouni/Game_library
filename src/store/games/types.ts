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
  filters: { key: string, value: string | Number | null }[];
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
  payload: { key: string, value: string }[]
}

export interface UpdateGamesFilters {
  type: typeof UPDATE_GAMES_FILTERS;
  filter: string;
  value: Number | string;
}

export type FetchGamesSuccess = {
  type: typeof FETCH_GAMES_SUCCESS;
  payload: FetchGamesSuccessPayload;
};

export type FetchGamesFailure = {
  type: typeof FETCH_GAMES_FAILURE;
  payload: FetchGamesFailurePayload;
};


export type GamesActions =
  | FetchGamesRequest
  | FetchGamesSuccess
  | FetchGamesFailure
  | UpdateGamesFilters
  ;