import { combineReducers } from "redux";

import login from "./login";
import newRelease from "./newRelease";

const appReducer = combineReducers({ login, newRelease });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
