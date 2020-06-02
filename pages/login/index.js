import React, { PureComponent } from "react";

import { withRouter } from "react-router";

import { Guide, FormLogin } from "Modules";

class Login extends PureComponent {
  spotifyLogin = () => {
    const { history } = this.props;
    const authUrl = "https://accounts.spotify.com/authorize";
    const authParams = {
      client_id: "572e7b660de04c5abadd226e419843e2",
      response_type: "code",
      redirect_uri: "http://localhost:3000/getToken"
    };

    const queryParams = new URLSearchParams(authParams).toString();

    history.push(authUrl + "?" + queryParams);
  };

  render() {
    const guideElements = {
      content: <FormLogin spotifyLogin={this.spotifyLogin} />
    };
    return <Guide {...guideElements} />;
  }
}

export default withRouter(Login);
