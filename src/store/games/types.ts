import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
} from "./actionTypes";
import IGame from "../../entities/Game";

export interface GameState {
  pending: boolean;
  games: IGame[];
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
}

export type FetchGamesSuccess = {
  type: typeof FETCH_GAMES_SUCCESS;
  payload: FetchGamesSuccessPayload;
};

export type FetchGamesFailure = {
  type: typeof FETCH_GAMES_FAILURE;
  payload: FetchGamesFailurePayload;
};

export type TodoActions =
  | FetchGamesRequest
  | FetchGamesSuccess
  | FetchGamesFailure;