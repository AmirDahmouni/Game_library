import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
  UPDATE_GAMES_FILTERS
} from "./actionTypes";

import { GamesActions, GamesState } from "./types";

const initialState: GamesState = {
  pending: false,
  games: [],
  filters: [],
  error: null,
};

export default (state = initialState, action: GamesActions) => {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        pending: false,
        games: action.payload.games,
        error: null,
      };
    case FETCH_GAMES_FAILURE:
      return {
        ...state,
        pending: false,
        games: [],
        error: action.payload.error,
      };
    case UPDATE_GAMES_FILTERS:
      return {
        ...state,
        filters: [
          ...state.filters,
          {
            key: action.filter,
            value: action.value
          }
        ],
      };
    default:
      return {
        ...state,
      };
  }
};