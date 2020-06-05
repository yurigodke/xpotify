import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import style from "./index.scss";

class AlbumCover extends PureComponent {
  render() {
    const { title, subtitle, image } = this.props;

    return (
      <div className={style["albumCover"]}>
        <div className={style["albumCover__image"]}>
          <img className={style["albumCover__image__item"]} src={image} />
        </div>
        <div className={style["albumCover__title"]}>{title}</div>
        <div className={style["albumCover__subtitle"]}>{subtitle}</div>
      </div>
    );
  }
}

AlbumCover.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default AlbumCover;
