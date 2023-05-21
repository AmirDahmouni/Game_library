import { FETCH_PLATFORMS_REQUEST, FETCH_PLATFORMS_FAILURE, FETCH_PLATFORMS_SUCCESS, SELECT_PLATFORM_FILTER } from "./actionTypes";
import {
  FetchPlatformsRequest,
  FetchPlatformsSuccess,
  FetchPlatformsSuccessPayload,
  FetchPlatformsFailure,
  FetchPlatformsFailurePayload,
  SelectPlatformFilter
} from "./types";


export const fetchPlatformsRequest = (): FetchPlatformsRequest => ({
  type: FETCH_PLATFORMS_REQUEST,
});

export const fetchPlatformsSuccess = (platforms: FetchPlatformsSuccessPayload): FetchPlatformsSuccess => ({
  type: FETCH_PLATFORMS_SUCCESS,
  platforms,
});

export const fetchPlatformsFailure = (payload: FetchPlatformsFailurePayload): FetchPlatformsFailure => ({
  type: FETCH_PLATFORMS_FAILURE,
  payload,
});

export const selectPlatformFilter = (platform: string): SelectPlatformFilter => ({
  type: SELECT_PLATFORM_FILTER,
  platform,
})