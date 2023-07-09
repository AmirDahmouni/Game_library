import { FETCH_TRAILER_REQUEST, FETCH_TRAILER_FAILURE, FETCH_TRAILER_SUCCESS } from "./actionTypes";
import {
  FetchTrailerRequest,
  FetchTrailerSuccess,
  FetchTrailerSuccessPayload,
  FetchTrailerFailure,
  FetchTrailerFailurePayload,
} from "./types";


export const fetchTrailerRequest = (): FetchTrailerRequest => ({
  type: FETCH_TRAILER_REQUEST,
});

export const fetchTrailerSuccess = (payload: FetchTrailerSuccessPayload): FetchTrailerSuccess => ({
  type: FETCH_TRAILER_SUCCESS,
  payload,
});

export const fetchTrailerFailure = (payload: FetchTrailerFailurePayload): FetchTrailerFailure => ({
  type: FETCH_TRAILER_FAILURE,
  payload,
});

