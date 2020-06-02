import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import style from "./index.scss";

class TrackItem extends PureComponent {
  render() {
    const { number, name, duration } = this.props;

    return (
      <div className={style["trackItem"]}>
        <div className={style["trackItem__number"]}>{number}.</div>
        <div className={style["trackItem__name"]}>{name}</div>
        <div className={style["trackItem__duration"]}>{duration}</div>
      </div>
    );
  }
}

TrackItem.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  duration: PropTypes.string
};

export default TrackItem;
