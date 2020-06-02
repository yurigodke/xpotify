import React, { PureComponent } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withRouter } from "react-router";

import { Guide, FormLogin } from "Modules";

import actions from "Actions";

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.sendCode();
  }

  componentDidUpdate(prevProps) {
    if (this.props.tokenData !== prevProps.tokenData) {
      this.isLogged();
    }
  }

  isLogged = () => {
    const { tokenData, history } = this.props;

    if (tokenData && tokenData["access_token"]) {
      history.push("/");
    }
  };

  sendCode = () => {
    const { getAccessToken, history } = this.props;
    const paramsString = location.search;
    const searchParams = new URLSearchParams(paramsString);

    const code = searchParams.get("code");

    if (code) {
      history.replace("/login");
      getAccessToken(code);
    } else {
      this.isLogged();
    }
  };

  spotifyLogin = () => {
    const authUrl = "https://accounts.spotify.com/authorize";
    const authParams = {
      client_id: "572e7b660de04c5abadd226e419843e2",
      response_type: "code",
      redirect_uri: "http://localhost:3000/login"
    };

    const queryParams = new URLSearchParams(authParams).toString();

    window.location.href = authUrl + "?" + queryParams;
  };

  setInputToken = token => {
    const { forceToken } = this.props;

    forceToken(token);
  };

  render() {
    const guideElements = {
      content: (
        <FormLogin
          spotifyLogin={this.spotifyLogin}
          setInputToken={this.setInputToken}
        />
      )
    };
    return <Guide {...guideElements} />;
  }
}

const mapStateToProps = state => {
  return { tokenData: state.login.tokenData };
};

const mapDisptachToProps = dispatch =>
  bindActionCreators({ ...actions.login }, dispatch);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(withRouter(Login));
