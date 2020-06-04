import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

import { Input } from "Components";

function Bar({ logout = () => {} }) {
  return (
    <div className={style["bar"]}>
      Logo<button onClick={logout}>Sair</button>
    </div>
  );
}

Bar.propTypes = {
  logout: PropTypes.func
};

export default Bar;
