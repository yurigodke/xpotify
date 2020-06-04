import {
  LOADING,
  SETTRACKLIST,
  SETTRACKLISTERROR,
  SETTRACKITEM,
  SETTRACKITEMERROR
} from "../constants.js";
import API from "../api";
import Utils from "../api/utils";

const getTrackInfo = trackId => async (dispatch, getState) => {
  dispatch({ type: LOADING });

  const reduxState = getState();
  const token = reduxState.login.tokenData
    ? reduxState.login.tokenData.access_token
    : null;

  if (reduxState.track.list[trackId]) {
    dispatch({
      type: SETTRACKITEM,
      payload: reduxState.track.list[trackId]
    });
  } else {
    const api = new API(token);
    const utils = new Utils({ dispatch, reduxState });

    const response = await api.get(`/tracks/${trackId}`);

    if (response.status === 200) {
      dispatch({
        type: SETTRACKLIST,
        payload: response.data
      });
      dispatch({
        type: SETTRACKITEM,
        payload: response.data
      });
    } else {
      utils.refreshCheck(
        response,
        {
          type: SETTRACKLISTERROR,
          payload: null
        },
        getTrackInfo(trackId)
      );
    }
  }
};

export default {
  getTrackInfo
};
