import { combineReducers } from "redux";

import login from "./login";
import newRelease from "./newRelease";
import search from "./search";

const appReducer = combineReducers({ login, newRelease, search });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
