import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import style from "./index.scss";

import { PlayerButton, Timeline, AlbumProfile } from "Components";

import actions from "Actions";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: 0,
      duration: 0,
      playerOn: false
    };

    this.audio = new Audio();
    this.setTrackPlay();
  }

  componentDidMount() {
    this.audio.addEventListener("ended", this.next);
    this.audio.addEventListener("timeupdate", this.timeupdate);
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", this.next);
    this.audio.removeEventListener("timeupdate", this.timeupdate);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentTrack != this.props.currentTrack) {
      this.pause();
      this.setTrackPlay();
    }
  }

  setTrackPlay = () => {
    const { currentTrack } = this.props;

    if (currentTrack.preview_url) {
      this.audio.src = currentTrack.preview_url;
      this.play();
    }
  };

  timeupdate = () => {
    this.setState({
      duration: Math.round(this.audio.duration),
      currentTime: Math.round(this.audio.currentTime)
    });
  };

  pause = () => {
    this.audio.pause();
    this.setState({
      playerOn: false
    });
  };

  play = () => {
    if (this.audio.src) {
      this.audio.play();
      this.setState({
        playerOn: true
      });
    }
  };

  next = () => {
    this.pause();
    this.props.setNextTrack();
  };

  prev = () => {
    this.pause();
    this.props.setPrevTrack();
  };

  render() {
    const { currentTrack } = this.props;
    const { currentTime, duration, playerOn } = this.state;

    const mainButtonType = playerOn ? "pause" : "play";
    const mainButtonAction = playerOn ? this.pause : this.play;

    const albumProfile = currentTrack.id ? (
      <AlbumProfile
        image={currentTrack.album.images[2].url}
        title={currentTrack.name}
        subtitle={currentTrack.artists[0].name}
      />
    ) : null;
    const nullElm = currentTrack.id ? (
      <div className={style["player__null"]} />
    ) : null;

    return (
      <div className={style["player"]}>
        {albumProfile}
        <div className={style["player__main"]}>
          <div className={style["player__main__controls"]}>
            <div className={style["player__main__controls__back"]}>
              <PlayerButton type="back" action={this.prev} />
            </div>
            <div className={style["player__main__controls__main"]}>
              <PlayerButton type={mainButtonType} action={mainButtonAction} />
            </div>
            <div className={style["player__main__controls__next"]}>
              <PlayerButton type="next" action={this.next} />
            </div>
          </div>
          <div className={style["player__main__timeline"]}>
            <Timeline time={currentTime} total={duration} />
          </div>
        </div>
        {nullElm}
      </div>
    );
  }
}

Player.propTypes = {};

const mapStateToProps = state => {
  return { currentTrack: state.track.item };
};

const mapDisptachToProps = dispatch =>
  bindActionCreators({ ...actions.track }, dispatch);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Player);
