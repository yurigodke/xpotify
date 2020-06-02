import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

import { Input, Button } from "Components";

function FormLogin({ spotifyLogin }) {
  return (
    <div className={style["formLogin"]}>
      <Input
        className={style["formLogin__input"]}
        title="Token"
        name="token"
        placeHolder="Digite seu token"
      />
      <Button>Entrar</Button>
      <hr className={style["formLogin__orBar"]} />
      <Button action={spotifyLogin}>Entrar com Spotify</Button>
    </div>
  );
}

FormLogin.propTypes = {
  spotifyLogin: PropTypes.func
};

export default FormLogin;
