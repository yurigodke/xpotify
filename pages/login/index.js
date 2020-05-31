import React, { PureComponent } from "react";

import { Guide, FormLogin } from "Modules";

class Login extends PureComponent {
  render() {
    const guideElements = {
      content: <FormLogin />
    };
    return <Guide {...guideElements} />;
  }
}

export default Login;
