import React from "react";

import { shallow } from "enzyme";

import AlbumList from "./index";

import { AlbumThumb } from "Components";

import { albumList } from "Mocks";

describe("<AlbumList />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<AlbumList />);

    expect(wrapper.find(".albumList").exists()).toBeTruthy();
    expect(wrapper.find(".albumList__title").exists()).toBeTruthy();
  });

  it("Render default element with data", () => {
    const params = {
      title: "Título teste",
      data: albumList
    };
    const wrapper = shallow(<AlbumList {...params} />);

    const trackItemFunc = wrapper
      .find(AlbumThumb)
      .at(0)
      .prop("onClick");

    trackItemFunc();

    expect(wrapper.find(".albumList").exists()).toBeTruthy();
    expect(wrapper.find(".albumList__title").exists()).toBeTruthy();
    expect(wrapper.find(".albumList__title").text()).toEqual(params.title);
    expect(wrapper.find(AlbumThumb).length).toEqual(20);
  });

  it("Render default element with data and action", () => {
    const params = {
      title: "Título teste",
      data: albumList,
      onSelection: jest.fn()
    };
    const wrapper = shallow(<AlbumList {...params} />);

    const trackItemFunc = wrapper
      .find(AlbumThumb)
      .at(0)
      .prop("onClick");

    trackItemFunc();

    expect(wrapper.find(".albumList").exists()).toBeTruthy();
    expect(wrapper.find(".albumList__title").exists()).toBeTruthy();
    expect(wrapper.find(".albumList__title").text()).toEqual(params.title);
    expect(wrapper.find(AlbumThumb).length).toEqual(20);
    expect(params.onSelection).toHaveBeenCalled();
  });
});
