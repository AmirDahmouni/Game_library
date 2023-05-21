import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.platforms;

const getPlatforms = (state: AppState) => state.platforms;

const getError = (state: AppState) => state.platforms;


export const getFiltersSelector = createSelector(getPlatforms, (filters) => filters);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);