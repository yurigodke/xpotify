import {
  LOADING,
  SETSEARCHLIST,
  SETSEARCHLISTERROR,
  SETSEARCHNAME
} from "../constants.js";
import API from "../api";
import Utils from "../api/utils";

const searchTerm = term => async (dispatch, getState) => {
  dispatch({ type: LOADING });
  dispatch({ type: SETSEARCHNAME, payload: term });

  const reduxState = getState();
  const token = reduxState.login.tokenData
    ? reduxState.login.tokenData.access_token
    : null;

  const api = new API(token);
  const utils = new Utils({ dispatch, reduxState });

  const response = await api.get(`/search?q=${term}&type=album`);

  if (response.status === 200) {
    dispatch({
      type: SETSEARCHLIST,
      payload: response.data
    });
  } else {
    utils.refreshCheck(
      response,
      {
        type: SETSEARCHLISTERROR,
        payload: null
      },
      searchTerm(term)
    );
  }
};

export default {
  searchTerm
};
