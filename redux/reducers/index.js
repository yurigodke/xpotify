import { combineReducers } from "redux";

import login from "./login";

const appReducer = combineReducers({ login });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
