import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

import { AlbumThumb } from "Components";

function AlbumList({ title, type = "scroll" }) {
  return (
    <div className={style["albumList"]}>
      <div className={style["albumList__title"]}>{title}</div>
      <div className={style["albumList__itens"]}>
        <div className={style[`albumList__itens__content-${type}`]}>
          <AlbumThumb
            title="Teste afs ofsiajfoa jsofasjao fjaosjfos f "
            subtitle="SubTeste"
          />
          <AlbumThumb title="Teste" subtitle="SubTeste" />
          <AlbumThumb title="Teste" subtitle="SubTeste" />
          <AlbumThumb title="Teste" subtitle="SubTeste" />
          <AlbumThumb title="Teste" subtitle="SubTeste" />
          <AlbumThumb title="Teste" subtitle="SubTeste" />
        </div>
      </div>
    </div>
  );
}

AlbumList.propTypes = {};

export default AlbumList;
