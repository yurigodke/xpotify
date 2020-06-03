import { SETNEWRELEASE, SETNEWRELEASEERROR } from "../constants.js";

import { combineReducers } from "redux";

const data = (state = null, { type, payload }) => {
  switch (type) {
    case SETNEWRELEASE:
    case SETNEWRELEASEERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ data });
