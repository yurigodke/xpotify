import React from "react";

import style from "./index.scss";

function Guide({ children }) {
  return (
    <div className={style["guide"]}>
      <div>
        <div>left - logo</div>
        <div>rigth - content</div>
      </div>
      <div>bottom - player</div>
    </div>
  );
}

export default Guide;
