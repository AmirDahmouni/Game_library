import { all, fork } from "redux-saga/effects";

import gamesSaga from "./games/sagas";

export function* rootSaga() {
  yield all([fork(gamesSaga)]);
}