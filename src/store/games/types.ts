import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
  UPDATE_GAMES_FILTERS,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_FAILURE
} from "./actionTypes";
import IGame from "../../entities/Game";

export interface GamesState {
  pending: boolean;
  games: IGame[];
  selectedGame: IGame;
  filters: { key: string, value: string | null }[];
  error: string | null;
}

export interface FetchGamesSuccessPayload {
  games: IGame[];
}
export interface FetchGameSuccessPayload {
  games: IGame;
}

export interface FetchGamesFailurePayload {
  error: string;
}
export interface FetchGameFailurePayload {
  error: string;
}


export interface FetchGamesRequest {
  type: typeof FETCH_GAMES_REQUEST;
  payload: { key: string, value: string }[]
}

export interface FetchGameRequest {
  type: typeof FETCH_GAME_REQUEST;
  payload: string
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

export type FetchGameSuccess = {
  type: typeof FETCH_GAME_SUCCESS;
  payload: FetchGameSuccessPayload;
};

export type FetchGameFailure = {
  type: typeof FETCH_GAME_FAILURE;
  payload: FetchGameFailurePayload;
};


export type GamesActions =
  | FetchGamesRequest
  | FetchGamesSuccess
  | FetchGamesFailure
  | UpdateGamesFilters
  | FetchGameRequest
  | FetchGameSuccess
  | FetchGameFailure
  ;