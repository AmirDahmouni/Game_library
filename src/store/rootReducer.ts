import { combineReducers } from "redux";

import gamesReducer from "./games/reducer";
import platformReducer from "./platforms/reducer"

const rootReducer = combineReducers({
  games: gamesReducer,
  platforms: platformReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;