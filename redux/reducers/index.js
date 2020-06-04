import { combineReducers } from "redux";

import login from "./login";
import newRelease from "./newRelease";
import search from "./search";
import album from "./album";

const appReducer = combineReducers({ login, newRelease, search, album });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
