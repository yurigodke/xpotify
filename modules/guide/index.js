import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

function Guide({ bar, children, bottom }) {
  let mainContent = null;

  if (bar && children) {
    const mainStyle = bottom
      ? classNames(style["guide__main"], style["guide__main__w-bottom"])
      : style["guide__main"];
    mainContent = (
      <div className={mainStyle}>
        <div className={style["guide__main__bar"]}>{bar}</div>
        <div className={style["guide__main__content"]}>{children}</div>
      </div>
    );
  } else if (children) {
    const mainStyle = classNames(
      style["guide__main"],
      style["guide__main__center"]
    );
    mainContent = <div className={mainStyle}>{children}</div>;
  }

  const bottomElm = bottom ? (
    <div className={style["guide__bottom"]}>{bottom}</div>
  ) : null;

  return (
    <div className={style["guide"]}>
      {mainContent}
      {bottomElm}
    </div>
  );
}

Guide.propTypes = {
  bar: PropTypes.element,
  children: PropTypes.element,
  bottom: PropTypes.element
};

export default Guide;
