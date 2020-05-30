import React from "react";

import style from "./index.scss";

function Guide({ children }) {
  return <div className={style["guide"]}>Guide - {children}</div>;
}

export default Guide;
