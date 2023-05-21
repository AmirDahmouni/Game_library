import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.games;

const getGames = (state: AppState) => state.games;

const getError = (state: AppState) => state.games;

const getFilters = (state: AppState) => state.games;

export const getGamesSelector = createSelector(getGames, (games) => games);

export const getFiltersSelector = createSelector(getFilters, (filters) => filters);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);