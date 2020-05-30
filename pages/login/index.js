import React, { PureComponent } from "react";

import { Guide } from "Modules";

class Login extends PureComponent {
  render() {
    const guideElements = {
      content: <div>Login</div>
    };
    return <Guide {...guideElements} />;
  }
}

export default Login;
