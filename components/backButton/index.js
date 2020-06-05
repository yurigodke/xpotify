import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import style from "./index.scss";

class Button extends PureComponent {
  render() {
    const { children, action } = this.props;

    return (
      <button className={style["button"]} onClick={action}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  action: PropTypes.func
};

export default Button;
