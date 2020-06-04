import React, { PureComponent } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withRouter } from "react-router";

import { Search, AlbumDetail, Player } from "Modules";

import style from "./index.scss";

import actions from "Actions";

class Detail extends PureComponent {
  constructor(props) {
    super(props);

    this.isLogged();

    const { match, history } = props;
    const { albumId } = match.params;

    if (albumId) {
      props.getAlbumData(albumId);
    } else {
      history.push("/");
    }
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

  go2Home = () => {
    const { history } = this.props;

    history.push("/");
  };

  render() {
    const { albumData, getTrackInfo } = this.props;

    return (
      <AlbumDetail
        data={albumData}
        backAction={this.go2Home}
        selectAction={getTrackInfo}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    tokenData: state.login.tokenData,
    albumData: state.album.data
  };
};

const mapDisptachToProps = dispatch =>
  bindActionCreators({ ...actions.album, ...actions.track }, dispatch);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(withRouter(Detail));
