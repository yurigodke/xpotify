import { LOADING, SETNEWRELEASE, SETNEWRELEASEERROR } from "../constants.js";
import API from "../api";
import Utils from "../api/utils";

const getNewReleases = () => async (dispatch, getState) => {
  dispatch({ type: LOADING });

  const reduxState = getState();
  const token = reduxState.login.tokenData
    ? reduxState.login.tokenData.access_token
    : null;

  const api = new API(token);
  const utils = new Utils({ dispatch, reduxState });

  const response = await api.get("/browse/new-releases?country=BR");

  if (response.status === 200) {
    dispatch({
      type: SETNEWRELEASE,
      payload: response.data
    });
  } else {
    utils.refreshCheck(
      response,
      {
        type: SETNEWRELEASEERROR,
        payload: null
      },
      getNewReleases()
    );
  }
};

export default {
  getNewReleases
};
