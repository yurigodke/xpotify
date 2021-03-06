import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

library.add([faSignOutAlt]);

import style from "./index.scss";

import actions from "Actions";

function Bar({ clearToken }) {
  return (
    <div className={style["bar"]}>
      <div className={style["bar__img"]}>
        <img
          className={classNames(
            style["bar__img__item"],
            style["bar__img__item__min"]
          )}
          src="/image/logo-min.png"
          alt=""
        />
        <img
          className={classNames(
            style["bar__img__item"],
            style["bar__img__item__hor"]
          )}
          src="/image/logo-hor.png"
          alt=""
        />
      </div>

      <button className={style["bar__button"]} onClick={clearToken}>
        <FontAwesomeIcon icon="sign-out-alt" />
        <span className={style["bar__button__text"]}>sair</span>
      </button>
    </div>
  );
}

Bar.propTypes = {};

export { Bar };

const mapStateToProps = state => {
  return {};
};

const mapDisptachToProps = dispatch =>
  bindActionCreators({ ...actions.login }, dispatch);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Bar);
