import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./index.scss";

import { Input, Button } from "Components";

function FormLogin({}) {
  return (
    <div className={style["formLogin"]}>
      <Input
        className={style["formLogin__input"]}
        title="Email"
        name="email"
        type="email"
        placeHolder="Digite seu e-mail"
      />
      <Input
        className={style["formLogin__input"]}
        title="Senha"
        email="password"
        type="password"
        placeHolder="Digite sua senha"
      />
      <Button>Entrar</Button>
    </div>
  );
}

FormLogin.propTypes = {};

export default FormLogin;
