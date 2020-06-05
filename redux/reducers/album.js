import {
  SETALBUMDETAIL,
  SETALBUMDETAILERROR,
  SETALBUMLIST,
  SETALBUMLISTERROR
} from "../constants.js";

import { combineReducers } from "redux";

const list = (state = {}, { type, payload }) => {
  switch (type) {
    case SETALBUMLIST:
      const itemList = {
        [payload.id]: payload
      };
      return { ...state, ...itemList };
    case SETALBUMLISTERROR:
      return payload;
    default:
      return state;
  }
};

const data = (state = {}, { type, payload }) => {
  switch (type) {
    case SETALBUMDETAIL:
    case SETALBUMDETAILERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ data, list });
