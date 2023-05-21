import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.games.pending;

const getGames = (state: AppState) => state.games.games;

const getError = (state: AppState) => state.games.error;

export const getGamesSelector = createSelector(getGames, (games) => games);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);