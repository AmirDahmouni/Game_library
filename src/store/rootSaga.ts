import { all, fork } from "redux-saga/effects";

import { gamesSaga, gameSaga, screenSaga } from "./games/sagas";
import platformsSaga from "./platforms/sagas";
import genresSaga from "./genres/sagas";
import trailerSaga from "./trailers/sagas";

export function* rootSaga() {
  yield all([
    fork(screenSaga),
    fork(gameSaga),
    fork(gamesSaga),
    fork(platformsSaga),
    fork(genresSaga),
    fork(trailerSaga)
  ]);
}