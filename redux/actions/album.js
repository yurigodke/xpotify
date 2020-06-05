import {
  LOADING,
  SETALBUMDETAIL,
  SETALBUMDETAILERROR,
  SETALBUMLIST,
  SETALBUMLISTERROR
} from "../constants.js";
import API from "../api";
import Utils from "../api/utils";

const getAlbumData = albumId => async (dispatch, getState) => {
  dispatch({
    type: SETALBUMDETAIL,
    payload: {}
  });
  dispatch({ type: LOADING });

  const reduxState = getState();
  const token = reduxState.login.tokenData
    ? reduxState.login.tokenData.access_token
    : null;

  if (reduxState.album.list[albumId]) {
    dispatch({
      type: SETALBUMDETAIL,
      payload: reduxState.album.list[albumId]
    });
  } else {
    const api = new API(token);
    const utils = new Utils({ dispatch, reduxState });

    const response = await api.get(`/albums/${albumId}`);

    if (response.status === 200) {
      dispatch({
        type: SETALBUMLIST,
        payload: response.data
      });
      dispatch({
        type: SETALBUMDETAIL,
        payload: response.data
      });
    } else {
      utils.refreshCheck(
        response,
        {
          type: SETALBUMDETAILERROR,
          payload: {}
        },
        getAlbumData(albumId)
      );
    }
  }
};

export default {
  getAlbumData
};
