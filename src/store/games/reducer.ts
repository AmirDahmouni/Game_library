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
  filters: [
    { key: "genreId", value: null },
    { key: "platfotmId", value: null },
    { key: "sortOrder", value: null },
    { key: "searchText", value: null },
    { key: "pageParam", value: null }
  ],
  error: null,
};

export default (state = initialState, action: GamesActions) => {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        pending: true,
        filters: action.payload
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
      {
        let updatedFilters = state.filters
        const indexFilter = updatedFilters?.findIndex(filter => filter.key === action.filter)
        if (indexFilter != -1)
          updatedFilters.splice(indexFilter, 1)
        updatedFilters.push({
          key: action.filter,
          value: action.value
        })
        return {
          ...state,
          filters: updatedFilters,
        };
      }
    default:
      return state
  }
};