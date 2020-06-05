import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

class TrackItem extends PureComponent {
  render() {
    const { number, name, duration, action, active } = this.props;

    const mainStyle = classNames(style["trackItem"], {
      [style["trackItem-active"]]: active
    });

    return (
      <div className={mainStyle} onClick={action}>
        <div className={style["trackItem__number"]}>{number}.</div>
        <div className={style["trackItem__name"]}>{name}</div>
        <div className={style["trackItem__duration"]}>{duration}</div>
      </div>
    );
  }
}

TrackItem.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  action: PropTypes.func,
  active: PropTypes.bool
};

export default TrackItem;
