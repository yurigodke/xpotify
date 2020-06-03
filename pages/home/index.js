import React, { PureComponent } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withRouter } from "react-router";

import { Guide, Search, AlbumList } from "Modules";

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

  logout = () => {
    this.props.clearToken();
  };

  getSearchList = term => {
    this.props.searchTerm(term);
  };

  render() {
    const { searchList, newRelease, searchName } = this.props;

    const searchListElm = searchList ? (
      <AlbumList
        title={`Resultados encontrados para "${searchName}"`}
        data={searchList}
      />
    ) : null;
    const guideElements = {
      bar: (
        <div>
          Logo<button onClick={this.logout}>Sair</button>
        </div>
      ),
      content: (
        <div className={style["home__content"]}>
          <Search getTerm={this.getSearchList} />
          {searchListElm}
          <AlbumList type="noscroll" title="Lançamentos" data={newRelease} />
        </div>
      )
    };
    return <Guide {...guideElements} />;
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
