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

const getCloseTracks = getState => {
  const reduxState = getState();

  const albumTrackList =
    reduxState.album.data && reduxState.album.data.tracks
      ? reduxState.album.data.tracks.items
      : [];
  const currentTrack = reduxState.track.item.id || null;

  let closeTracks = {};

  if (currentTrack) {
    const totalTracks = albumTrackList.length;

    for (let index in albumTrackList) {
      if (albumTrackList[index].id === currentTrack) {
        const prevIndexTemp = Number(index) - 1;
        const prevIndex = prevIndexTemp < 0 ? totalTracks - 1 : prevIndexTemp;

        const nextIndexTemp = Number(index) + 1;
        const nextIndex = nextIndexTemp >= totalTracks ? 0 : nextIndexTemp;

        closeTracks = {
          prevId: albumTrackList[prevIndex].id,
          nextId: albumTrackList[nextIndex].id
        };
        break;
      }
    }
  }

  return closeTracks;
};

const setNextTrack = () => (dispatch, getState) => {
  const closeTracks = getCloseTracks(getState);

  if (closeTracks.nextId) {
    dispatch(getTrackInfo(closeTracks.nextId));
  }
};

const setPrevTrack = () => (dispatch, getState) => {
  const closeTracks = getCloseTracks(getState);

  if (closeTracks.prevId) {
    dispatch(getTrackInfo(closeTracks.prevId));
  }
};

export default {
  getTrackInfo,
  setNextTrack,
  setPrevTrack
};
