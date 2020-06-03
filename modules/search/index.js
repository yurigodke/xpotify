import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

import { Input } from "Components";

function Search({ getTerm = () => {} }) {
  return (
    <div className={style["search"]}>
      <Input
        className={style["formLogin__input"]}
        title="Busque por artistas, álbuns ou músicas"
        name="search"
        mode="big"
        placeHolder="Comece a escrever…"
        getValue={term => getTerm(term)}
      />
    </div>
  );
}

Search.propTypes = {
  getTerm: PropTypes.func
};

export default Search;
