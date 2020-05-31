import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import style from "./index.scss";

class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  setValue = e => {
    const value = e.target.value;

    this.setState({
      value
    });
  };

  render() {
    const { title, type, name, placeHolder, className } = this.props;
    const { value } = this.state;

    const titleElm = title ? (
      <div className={style["input__title"]}>{title}</div>
    ) : null;

    const placeHolderElm =
      placeHolder && value === "" ? (
        <div className={style["input__placeHolder"]}>{placeHolder}</div>
      ) : null;
    return (
      <div className={className}>
        {titleElm}
        <label className={style["input"]}>
          {placeHolderElm}
          <input
            className={style["input__writter"]}
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
  className: PropTypes.string
};

Input.defaultProps = {
  type: "text"
};

export default Input;
