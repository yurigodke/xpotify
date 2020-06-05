import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStepForward,
  faStepBackward,
  faPlay,
  faPause
} from "@fortawesome/free-solid-svg-icons";

library.add([faStepForward, faStepBackward, faPlay, faPause]);

import style from "./index.scss";

class PlayerButton extends PureComponent {
  render() {
    const { type, action } = this.props;

    const iconsNames = {
      back: "step-backward",
      next: "step-forward",
      play: "play",
      pause: "pause"
    };

    const buttonStyle = classNames(style["button"], style[`button__${type}`]);

    return (
      <div className={buttonStyle} onClick={action}>
        <FontAwesomeIcon icon={iconsNames[type]} />
      </div>
    );
  }
}

PlayerButton.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.func
};

export default PlayerButton;
