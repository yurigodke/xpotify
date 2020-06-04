import { LOADING, SETALBUMDETAIL, SETALBUMDETAILERROR } from "../constants.js";
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

  const api = new API(token);
  const utils = new Utils({ dispatch, reduxState });

  const response = await api.get(`/albums/${albumId}`);

  if (response.status === 200) {
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
};

export default {
  getAlbumData
};
