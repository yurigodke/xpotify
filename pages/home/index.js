import React, { PureComponent } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withRouter } from "react-router";

import { Search, AlbumList } from "Modules";

import actions from "Actions";

import style from "./index.scss";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.isLogged();

    props.getNewReleases();
  }

  componentDidUpdate(prevProps) {
    if (this.props.tokenData !== prevProps.tokenData) {
      this.isLogged();
    }
  }

  isLogged = () => {
    const { tokenData, history } = this.props;

    if (tokenData && !tokenData["access_token"]) {
      history.push("/login");
    }
  };

  getSearchList = term => {
    this.props.searchTerm(term);
  };

  go2Album = albumId => {
    const { history } = this.props;

    history.push(`/detail/${albumId}`);
  };

  render() {
    const { searchList, newRelease, searchName } = this.props;

    const searchListElm = searchList ? (
      <AlbumList
        title={`Resultados encontrados para "${searchName}"`}
        data={searchList}
        onSelection={this.go2Album}
      />
    ) : null;

    return (
      <div className={style["home__content"]}>
        <Search getTerm={this.getSearchList} />
        {searchListElm}
        <AlbumList
          type="noscroll"
          title="Lançamentos"
          data={newRelease}
          onSelection={this.go2Album}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tokenData: state.login.tokenData,
    newRelease: state.newRelease.data,
    searchList: state.search.list,
    searchName: state.search.name
  };
};

const mapDisptachToProps = dispatch =>
  bindActionCreators(
    { ...actions.login, ...actions.newRelease, ...actions.search },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(withRouter(Home));
