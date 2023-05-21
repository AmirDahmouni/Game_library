import { FETCH_GENRES_REQUEST, FETCH_GENRES_FAILURE, FETCH_GENRES_SUCCESS, SELECT_GENRE_FILTER } from "./actionTypes";
import {
  FetchGenresRequest,
  FetchGenresSuccess,
  FetchGenresSuccessPayload,
  FetchGenresFailure,
  FetchGenresFailurePayload,
  SelectGenreFilter
} from "./types";


export const fetchGenresRequest = (): FetchGenresRequest => ({
  type: FETCH_GENRES_REQUEST,
});

export const fetchGenresSuccess = (genres: FetchGenresSuccessPayload): FetchGenresSuccess => ({
  type: FETCH_GENRES_SUCCESS,
  genres,
});

export const fetchGenresFailure = (payload: FetchGenresFailurePayload): FetchGenresFailure => ({
  type: FETCH_GENRES_FAILURE,
  payload,
});

export const selectGenreFilter = (genre: string): SelectGenreFilter => ({
  type: SELECT_GENRE_FILTER,
  genre,
})