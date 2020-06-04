import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import style from "./index.scss";

import actions from "Actions";

import {} from "Components";

function Bar({ clearToken }) {
  return (
    <div className={style["bar"]}>
      Logo<button onClick={clearToken}>Sair</button>
    </div>
  );
}

Bar.propTypes = {};

const mapStateToProps = state => {
  return {};
};

const mapDisptachToProps = dispatch =>
  bindActionCreators({ ...actions.login }, dispatch);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Bar);
