import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

import { BackButton, AlbumCover, TrackItem } from "Components";

function AlbumDetail({ title, type = "scroll" }) {
  return (
    <div className={style["albumDetail"]}>
      <div className={style["albumDetail__top"]}>
        <BackButton>Voltar</BackButton>
      </div>
      <div className={style["albumDetail__content"]}>
        <div className={style["albumDetail__content__cover"]}>
          <AlbumCover title="Album cover" subtitle="AlbumCoverSubtitle" />
        </div>
        <div className={style["albumDetail__content__trackList"]}>
          <TrackItem number={1} name="Test track" duration="2:39" />
          <TrackItem number={2} name="Test track" duration="2:39" />
          <TrackItem number={3} name="Test track" duration="2:39" />
          <TrackItem number={4} name="Test track" duration="2:39" />
        </div>
      </div>
    </div>
  );
}

AlbumDetail.propTypes = {};

export default AlbumDetail;
