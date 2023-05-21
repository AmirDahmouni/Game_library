import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.genres;

const getGenres = (state: AppState) => state.genres;

const getError = (state: AppState) => state.genres;


export const getFiltersSelector = createSelector(getGenres, (genres) => genres);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);