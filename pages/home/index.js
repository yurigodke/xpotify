import React, { PureComponent } from "react";

import { Guide, Search, AlbumList } from "Modules";

import style from "./index.scss";

class Home extends PureComponent {
  render() {
    const guideElements = {
      bar: <div>Logo</div>,
      content: (
        <div className={style["home__content"]}>
          <Search />
          <AlbumList title="Álbuns buscados recentemente" />
        </div>
      )
    };
    return <Guide {...guideElements} />;
  }
}

export default Home;
