import {
  SETTRACKLIST,
  SETTRACKLISTERROR,
  SETTRACKITEM,
  SETTRACKITEMERROR
} from "../constants.js";

import { combineReducers } from "redux";

const list = (state = {}, { type, payload }) => {
  switch (type) {
    case SETTRACKLIST:
      const itemList = {
        [payload.id]: payload
      };
      return { ...state, ...itemList };
    case SETTRACKLISTERROR:
      return payload;
    default:
      return state;
  }
};

const item = (state = {}, { type, payload }) => {
  switch (type) {
    case SETTRACKITEM:
    case SETTRACKITEMERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ list, item });
