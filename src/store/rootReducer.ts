import { combineReducers } from "redux";

import gamesReducer from "./games/reducer";
import platformReducer from "./platforms/reducer"
import genresReducer from "./genres/reducer"

const rootReducer = combineReducers({
  games: gamesReducer,
  platforms: platformReducer,
  genres: genresReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;