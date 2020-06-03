import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

import { AlbumThumb } from "Components";

function AlbumList({ title, data, type = "scroll" }) {
  let albumsItens = null;
  if (data) {
    albumsItens = data.albums.items.map(item => {
      return (
        <AlbumThumb
          key={item.id}
          image={item.images[1].url}
          title={item.name}
          subtitle={item.artists[0].name}
        />
      );
    });
  }
  return (
    <div className={style["albumList"]}>
      <div className={style["albumList__title"]}>{title}</div>
      <div className={style["albumList__itens"]}>
        <div className={style[`albumList__itens__content-${type}`]}>
          {albumsItens}
        </div>
      </div>
    </div>
  );
}

AlbumList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string
};

export default AlbumList;
