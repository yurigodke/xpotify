import React, { PureComponent } from "react";

import { Guide, Search } from "Modules";

class Home extends PureComponent {
  render() {
    const guideElements = {
      bar: <div>Logo</div>,
      content: <Search />
    };
    return <Guide {...guideElements} />;
  }
}

export default Home;
