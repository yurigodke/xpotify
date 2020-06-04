import { combineReducers } from "redux";

import login from "./login";
import newRelease from "./newRelease";
import search from "./search";
import album from "./album";
import track from "./track";

const appReducer = combineReducers({ login, newRelease, search, album, track });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
