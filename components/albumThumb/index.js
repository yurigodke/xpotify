import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import style from "./index.scss";

class AlbumThumb extends PureComponent {
  render() {
    const { title, subtitle, image, onClick } = this.props;

    return (
      <div className={style["albumThumb"]} onClick={onClick}>
        <div className={style["albumThumb__image"]}>
          <img
            className={style["albumThumb__image__item"]}
            src={image}
            alt=""
          />
        </div>
        <div className={style["albumThumb__title"]}>{title}</div>
        <div className={style["albumThumb__subtitle"]}>{subtitle}</div>
      </div>
    );
  }
}

AlbumThumb.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func
};

export default AlbumThumb;
