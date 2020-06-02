import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

import { Input, Button } from "Components";

class FormLogin extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      token: ""
    };
  }

  sendInputToken = () => {
    const { setInputToken } = this.props;
    const { token } = this.state;

    setInputToken(token);
  };

  render() {
    const { spotifyLogin } = this.props;

    return (
      <div className={style["formLogin"]}>
        <Input
          className={style["formLogin__input"]}
          title="Token"
          name="token"
          placeHolder="Digite seu token"
          getValue={token => this.setState({ token })}
        />
        <Button action={this.sendInputToken}>Entrar</Button>
        <hr className={style["formLogin__orBar"]} />
        <Button action={spotifyLogin}>Entrar com Spotify</Button>
      </div>
    );
  }
}

FormLogin.propTypes = {
  spotifyLogin: PropTypes.func,
  setInputToken: PropTypes.func
};

export default FormLogin;
