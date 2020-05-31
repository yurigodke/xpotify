import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import style from "./index.scss";

class Button extends PureComponent {
  render() {
    const { children } = this.props;

    return <button className={style["button"]}>{children}</button>;
  }
}

Button.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func
};

export default Button;
