import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  setValue = e => {
    const { getValue } = this.props;
    const value = e.target.value;

    this.setState({
      value
    });

    if (getValue) {
      getValue(value);
    }
  };

  getStyleModifier = className => {
    const { mode } = this.props;

    const modifierStyle = classNames(style[`input__${className}`], {
      [style[`input__big__${className}`]]: mode === "big"
    });

    return modifierStyle;
  };

  render() {
    const { title, type, name, placeHolder, className } = this.props;
    const { value } = this.state;

    const titleElm = title ? (
      <div className={style["input__title"]}>{title}</div>
    ) : null;

    const placeHolderElm =
      placeHolder && value === "" ? (
        <div className={this.getStyleModifier("placeHolder")}>
          {placeHolder}
        </div>
      ) : null;

    return (
      <div className={className}>
        {titleElm}
        <label className={style["input"]}>
          {placeHolderElm}
          <input
            className={this.getStyleModifier("writter")}
            type={type}
            name={name}
            value={value}
            onChange={this.setValue}
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  getValue: PropTypes.func
};

Input.defaultProps = {
  type: "text"
};

export default Input;
