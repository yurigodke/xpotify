import { SETACCESSTOKEN, SETACCESSTOKENERROR } from "../constants.js";

import { combineReducers } from "redux";

const tokenData = (state = null, { type, payload }) => {
  switch (type) {
    case SETACCESSTOKEN:
    case SETACCESSTOKENERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ tokenData });
