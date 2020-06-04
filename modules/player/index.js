import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import style from "./index.scss";

import { PlayerButton, Timeline } from "Components";

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
    this.audio.addEventListener("ended", this.pause);
    this.audio.addEventListener("timeupdate", this.timeupdate);
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", this.pause);
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
    this.audio.play();
    this.setState({
      playerOn: true
    });
  };

  render() {
    const { currentTrack } = this.props;
    const { currentTime, duration, playerOn } = this.state;

    const mainButtonType = playerOn ? "pause" : "play";
    const mainButtonAction = playerOn ? this.pause : this.play;

    return (
      <div className={style["player"]}>
        <div className={style["player__controls"]}>
          <div className={style["player__controls__back"]}>
            <PlayerButton type="back" />
          </div>
          <div className={style["player__controls__main"]}>
            <PlayerButton type={mainButtonType} action={mainButtonAction} />
          </div>
          <div className={style["player__controls__next"]}>
            <PlayerButton type="next" />
          </div>
        </div>
        <div className={style["player__timeline"]}>
          <Timeline time={currentTime} total={duration} />
        </div>
      </div>
    );
  }
}

Player.propTypes = {};

const mapStateToProps = state => {
  return { currentTrack: state.track.item };
};

const mapDisptachToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Player);
