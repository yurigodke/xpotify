import React from "react";

import { shallow } from "enzyme";

import AlbumDetail from "./index";

import { BackButton, AlbumCover, TrackItem } from "Components";

import { album } from "Mocks";

describe("<AlbumDetail />", () => {
  it("Render default element", () => {
    const params = {
      data: {}
    };
    const wrapper = shallow(<AlbumDetail {...params} />);

    expect(wrapper.find(".albumDetail").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".albumDetail__top")
        .find(BackButton)
        .exists()
    ).toBeTruthy();
  });

  it("Render default element with data", () => {
    const params = {
      data: album
    };

    const wrapper = shallow(<AlbumDetail {...params} />);

    expect(wrapper.find(".albumDetail").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".albumDetail__top")
        .find(BackButton)
        .exists()
    ).toBeTruthy();
    expect(wrapper.find(".albumDetail__content").exists()).toBeTruthy();
    expect(wrapper.find(AlbumCover).exists()).toBeTruthy();
    expect(wrapper.find(TrackItem).length).toEqual(2);
  });

  it("Render default element with data and active track", () => {
    const params = {
      data: album,
      currentTrack: {
        id: "4HIKeX6HaUvmYxuj6jFn1Y"
      }
    };

    const wrapper = shallow(<AlbumDetail {...params} />);

    const trackItemFunc = wrapper
      .find(TrackItem)
      .at(0)
      .prop("action");

    trackItemFunc();

    expect(wrapper.find(".albumDetail").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".albumDetail__top")
        .find(BackButton)
        .exists()
    ).toBeTruthy();
    expect(wrapper.find(".albumDetail__content").exists()).toBeTruthy();
    expect(wrapper.find(AlbumCover).exists()).toBeTruthy();
    expect(wrapper.find(TrackItem).length).toEqual(2);
    expect(
      wrapper
        .find(TrackItem)
        .at(0)
        .prop("active")
    ).toBeFalsy();
    expect(
      wrapper
        .find(TrackItem)
        .at(1)
        .prop("active")
    ).toBeTruthy();
  });

  it("Render default element with data and action", () => {
    const params = {
      data: album,
      selectAction: jest.fn()
    };

    const wrapper = shallow(<AlbumDetail {...params} />);

    const trackItemFunc = wrapper
      .find(TrackItem)
      .at(0)
      .prop("action");

    trackItemFunc();

    expect(wrapper.find(".albumDetail").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".albumDetail__top")
        .find(BackButton)
        .exists()
    ).toBeTruthy();
    expect(wrapper.find(".albumDetail__content").exists()).toBeTruthy();
    expect(wrapper.find(AlbumCover).exists()).toBeTruthy();
    expect(wrapper.find(TrackItem).length).toEqual(2);
    expect(params.selectAction).toHaveBeenCalled();
  });
});
