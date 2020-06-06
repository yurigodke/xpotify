import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

import { BackButton, AlbumCover, TrackItem } from "Components";

function AlbumDetail({
  data,
  backAction,
  selectAction = () => {},
  currentTrack = {}
}) {
  let trackListElm = null;

  const formatDuration = msDuration => {
    const durationSeconds = Math.round(msDuration / 1000);

    const minutes = Math.floor(durationSeconds / 60).toString();
    const seconds = (durationSeconds % 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  if (data.tracks) {
    trackListElm = data.tracks.items.map(item => {
      return (
        <TrackItem
          key={item.id}
          number={item.track_number}
          name={item.name}
          active={item.id === currentTrack.id}
          duration={formatDuration(item.duration_ms)}
          action={() => selectAction(item.id)}
        />
      );
    });
  }

  const contentElm = data.id ? (
    <div className={style["albumDetail__content"]}>
      <div className={style["albumDetail__content__cover"]}>
        <AlbumCover
          title={data.name}
          subtitle={data.artists[0].name}
          image={data.images[0].url}
        />
      </div>
      <div className={style["albumDetail__content__trackList"]}>
        {trackListElm}
      </div>
    </div>
  ) : null;

  return (
    <div className={style["albumDetail"]}>
      <div className={style["albumDetail__top"]}>
        <BackButton action={backAction}>Voltar</BackButton>
      </div>
      {contentElm}
    </div>
  );
}

AlbumDetail.propTypes = {
  data: PropTypes.object.isRequired,
  currentTrack: PropTypes.object,
  backAction: PropTypes.func,
  selectAction: PropTypes.func
};

export default AlbumDetail;
