import React, { PureComponent } from "react";

import { Guide, Search, AlbumDetail, Player } from "Modules";

import style from "./index.scss";

class Detail extends PureComponent {
  render() {
    const guideElements = {
      bar: <div>Logo</div>,
      content: <AlbumDetail />,
      bottom: <Player />
    };
    return <Guide {...guideElements} />;
  }
}

export default Detail;
