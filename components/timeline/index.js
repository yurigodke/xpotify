import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

class Timeline extends PureComponent {
  formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = seconds.toString().padStart(2, "0");

    return `${minutesStr}:${secondsStr}`;
  };

  render() {
    const { time, total } = this.props;

    const percent = Math.round((time * 100) / total);

    const fillStyle = {
      width: percent + "%"
    };

    return (
      <div className={style["timeline"]}>
        <div className={style["timeline__text"]}>{this.formatTime(time)}</div>
        <div className={style["timeline__cursor"]}>
          <div
            className={style["timeline__cursor__fill"]}
            style={fillStyle}
          ></div>
        </div>
        <div className={style["timeline__text"]}>{this.formatTime(total)}</div>
      </div>
    );
  }
}

Timeline.propTypes = {
  time: PropTypes.number,
  total: PropTypes.number
};

export default Timeline;
