import {
  SETSEARCHLIST,
  SETSEARCHLISTERROR,
  SETSEARCHNAME
} from "../constants.js";

import { combineReducers } from "redux";

const list = (state = null, { type, payload }) => {
  switch (type) {
    case SETSEARCHLIST:
    case SETSEARCHLISTERROR:
      return payload;
    default:
      return state;
  }
};

const name = (state = "", { type, payload }) => {
  switch (type) {
    case SETSEARCHNAME:
      return payload;
      break;
    default:
      return state;
  }
};

export default combineReducers({ list, name });
