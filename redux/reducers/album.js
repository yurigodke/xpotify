import { SETALBUMDETAIL, SETALBUMDETAILERROR } from "../constants.js";

import { combineReducers } from "redux";

const data = (state = {}, { type, payload }) => {
  switch (type) {
    case SETALBUMDETAIL:
    case SETALBUMDETAILERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ data });
