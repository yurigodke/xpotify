import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import style from "./index.scss";

class AlbumProfile extends PureComponent {
  render() {
    const { title, subtitle, image, onClick } = this.props;

    return (
      <div className={style["albumProfile"]} onClick={onClick}>
        <div className={style["albumProfile__image"]}>
          <img
            className={style["albumProfile__image__item"]}
            src={image}
            alt=""
          />
        </div>
        <div className={style["albumProfile__text"]}>
          <div className={style["albumProfile__text__title"]}>{title}</div>
          <div className={style["albumProfile__text__subtitle"]}>
            {subtitle}
          </div>
        </div>
      </div>
    );
  }
}

AlbumProfile.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func
};

export default AlbumProfile;
