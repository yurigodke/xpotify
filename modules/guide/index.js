import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

function Guide({ bar, content, bottom }) {
  let mainContent = null;

  if (bar && content) {
    mainContent = (
      <div className={style["guide__main"]}>
        {bar}
        {content}
      </div>
    );
  } else if (content) {
    mainContent = (
      <div
        className={classNames(
          style["guide__main"],
          style["guide__main__center"]
        )}
      >
        {content}
      </div>
    );
  }

  const bottomContent = bottom ? (
    <div className={style["guide__bottom"]}>{bottom}</div>
  ) : null;

  return (
    <div className={style["guide"]}>
      {mainContent}
      {bottomContent}
    </div>
  );
}

Guide.propTypes = {
  bar: PropTypes.element,
  content: PropTypes.element,
  bottom: PropTypes.element
};

export default Guide;
