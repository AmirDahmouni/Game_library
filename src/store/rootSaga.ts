import { all, fork } from "redux-saga/effects";

import gamesSaga from "./games/sagas";
import platformsSaga from "./platforms/sagas";
import genresSaga from "./genres/sagas";

export function* rootSaga() {
  yield all([fork(gamesSaga), fork(platformsSaga), fork(genresSaga)]);
}