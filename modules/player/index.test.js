import React from "react";

import { shallow } from "enzyme";

import Player from "./index";

import { PlayerButton, AlbumProfile } from "Components";

import { wrapperRedux, track, albumList } from "Mocks";

describe("<Player />", () => {
  it("Render default element", () => {
    const wrapperCont = new wrapperRedux(<Player />);
    const wrapper = wrapperCont.getBaseElement();

    expect(wrapper.find(".player").exists()).toBeTruthy();
    expect(wrapper.find(AlbumProfile).exists()).toBeFalsy();
    expect(wrapper.find(".player__null").exists()).toBeFalsy();
    expect(wrapper.find(".player__main__controls__back").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__back")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("back");
    expect(wrapper.find(".player__main__controls__main").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__main")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("play");
    expect(wrapper.find(".player__main__controls__next").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__next")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("next");
  });

  it("Render default element with track", () => {
    HTMLMediaElement.prototype.play = jest.fn();
    const wrapperCont = new wrapperRedux(<Player />, {
      track: {
        item: track
      }
    });
    const wrapper = wrapperCont.getBaseElement();

    expect(wrapper.find(".player").exists()).toBeTruthy();
    expect(wrapper.find(AlbumProfile).exists()).toBeTruthy();
    expect(wrapper.find(".player__null").exists()).toBeTruthy();
    expect(wrapper.find(".player__main__controls__back").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__back")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("back");
    expect(wrapper.find(".player__main__controls__main").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__main")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("pause");
    expect(wrapper.find(".player__main__controls__next").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__next")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("next");
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it("Render default element with track paused", () => {
    HTMLMediaElement.prototype.play = jest.fn();
    HTMLMediaElement.prototype.pause = jest.fn();
    const wrapperCont = new wrapperRedux(<Player />, {
      track: {
        item: track
      }
    });
    let wrapper = wrapperCont.getBaseElement();

    const tooglePlayFunc = wrapper
      .find(".player__main__controls__main")
      .find(PlayerButton)
      .prop("action");
    tooglePlayFunc();

    wrapperCont.update();
    wrapper = wrapperCont.getBaseElement();

    expect(wrapper.find(".player").exists()).toBeTruthy();
    expect(wrapper.find(AlbumProfile).exists()).toBeTruthy();
    expect(wrapper.find(".player__null").exists()).toBeTruthy();
    expect(wrapper.find(".player__main__controls__back").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__back")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("back");
    expect(wrapper.find(".player__main__controls__main").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__main")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("play");
    expect(wrapper.find(".player__main__controls__next").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__next")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("next");
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();

    wrapperCont.unmount();
  });

  it("Render default element with track replayed", () => {
    HTMLMediaElement.prototype.play = jest.fn();
    HTMLMediaElement.prototype.pause = jest.fn();
    const wrapperCont = new wrapperRedux(<Player />, {
      track: {
        item: track
      }
    });
    let wrapper = wrapperCont.getBaseElement();

    let tooglePlayFunc = wrapper
      .find(".player__main__controls__main")
      .find(PlayerButton)
      .prop("action");
    tooglePlayFunc();
    wrapperCont.update();
    wrapper = wrapperCont.getBaseElement();

    tooglePlayFunc = wrapper
      .find(".player__main__controls__main")
      .find(PlayerButton)
      .prop("action");
    tooglePlayFunc();
    wrapperCont.update();
    wrapper = wrapperCont.getBaseElement();

    expect(wrapper.find(".player").exists()).toBeTruthy();
    expect(wrapper.find(AlbumProfile).exists()).toBeTruthy();
    expect(wrapper.find(".player__null").exists()).toBeTruthy();
    expect(wrapper.find(".player__main__controls__back").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__back")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("back");
    expect(wrapper.find(".player__main__controls__main").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__main")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("pause");
    expect(wrapper.find(".player__main__controls__next").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__next")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("next");
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2);
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();

    wrapperCont.unmount();
  });

  it("Render default element played without track ", () => {
    HTMLMediaElement.prototype.play = jest.fn();
    const wrapperCont = new wrapperRedux(<Player />);
    let wrapper = wrapperCont.getBaseElement();

    let tooglePlayFunc = wrapper
      .find(".player__main__controls__main")
      .find(PlayerButton)
      .prop("action");
    tooglePlayFunc();
    wrapperCont.update();
    wrapper = wrapperCont.getBaseElement();

    expect(wrapper.find(".player").exists()).toBeTruthy();
    expect(wrapper.find(AlbumProfile).exists()).toBeFalsy();
    expect(wrapper.find(".player__null").exists()).toBeFalsy();
    expect(wrapper.find(".player__main__controls__back").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__back")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("back");
    expect(wrapper.find(".player__main__controls__main").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__main")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("play");
    expect(wrapper.find(".player__main__controls__next").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__next")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("next");
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();

    wrapperCont.unmount();
  });

  it("Render default element with track next action", () => {
    HTMLMediaElement.prototype.play = jest.fn();
    HTMLMediaElement.prototype.pause = jest.fn();
    const wrapperCont = new wrapperRedux(<Player />, {
      track: {
        item: track
      },
      album: {
        list: albumList
      }
    });
    let wrapper = wrapperCont.getBaseElement();

    let playNextFunc = wrapper
      .find(".player__main__controls__next")
      .find(PlayerButton)
      .prop("action");
    playNextFunc();
    wrapperCont.update();
    wrapper = wrapperCont.getBaseElement();

    wrapperCont.updateStore({
      track: {
        item: {
          id: track.id + "X",
          ...track
        }
      },
      album: {
        list: albumList
      }
    });

    expect(wrapper.find(".player").exists()).toBeTruthy();
    expect(wrapper.find(AlbumProfile).exists()).toBeTruthy();
    expect(wrapper.find(".player__null").exists()).toBeTruthy();
    expect(wrapper.find(".player__main__controls__back").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__back")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("back");
    expect(wrapper.find(".player__main__controls__main").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__main")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("play");
    expect(wrapper.find(".player__main__controls__next").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__next")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("next");
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();

    wrapperCont.unmount();
  });

  it("Render default element with track back action", () => {
    HTMLMediaElement.prototype.play = jest.fn();
    HTMLMediaElement.prototype.pause = jest.fn();
    const wrapperCont = new wrapperRedux(<Player />, {
      track: {
        item: track
      },
      album: {
        list: albumList
      }
    });
    let wrapper = wrapperCont.getBaseElement();

    let playNextFunc = wrapper
      .find(".player__main__controls__back")
      .find(PlayerButton)
      .prop("action");
    playNextFunc();
    wrapperCont.update();
    wrapper = wrapperCont.getBaseElement();

    wrapperCont.updateStore({
      track: {
        item: {
          id: track.id + "X",
          ...track
        }
      },
      album: {
        list: albumList
      }
    });

    expect(wrapper.find(".player").exists()).toBeTruthy();
    expect(wrapper.find(AlbumProfile).exists()).toBeTruthy();
    expect(wrapper.find(".player__null").exists()).toBeTruthy();
    expect(wrapper.find(".player__main__controls__back").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__back")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("back");
    expect(wrapper.find(".player__main__controls__main").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__main")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("play");
    expect(wrapper.find(".player__main__controls__next").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__next")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("next");
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();

    wrapperCont.unmount();
  });

  it("Render default element with track time pass audio", () => {
    var timeupdateEvent = new Event("timeupdate");
    HTMLMediaElement.prototype.play = jest.fn();
    const wrapperCont = new wrapperRedux(<Player />, {
      track: {
        item: track
      },
      album: {
        list: albumList
      }
    });
    let wrapper = wrapperCont.getBaseElement();

    wrapper.instance().audio.dispatchEvent(timeupdateEvent);

    expect(wrapper.find(".player").exists()).toBeTruthy();
    expect(wrapper.find(AlbumProfile).exists()).toBeTruthy();
    expect(wrapper.find(".player__null").exists()).toBeTruthy();
    expect(wrapper.find(".player__main__controls__back").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__back")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("back");
    expect(wrapper.find(".player__main__controls__main").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__main")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("pause");
    expect(wrapper.find(".player__main__controls__next").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".player__main__controls__next")
        .find(PlayerButton)
        .prop("type")
    ).toEqual("next");
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();

    wrapperCont.unmount();
  });
});
