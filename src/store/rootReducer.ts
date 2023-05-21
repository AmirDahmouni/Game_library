import { combineReducers } from "redux";

import gamesReducer from "./games/reducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;