import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

import { PlayerButton, Timeline } from "Components";

function Player({}) {
  return (
    <div className={style["player"]}>
      <div className={style["player__controls"]}>
        <div className={style["player__controls__back"]}>
          <PlayerButton type="back" />
        </div>
        <div className={style["player__controls__main"]}>
          <PlayerButton type="play" />
        </div>
        <div className={style["player__controls__next"]}>
          <PlayerButton type="next" />
        </div>
      </div>
      <div className={style["player__timeline"]}>
        <Timeline time={110} total={112} />
      </div>
    </div>
  );
}

Player.propTypes = {};

export default Player;
