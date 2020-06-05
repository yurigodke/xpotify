import React from "react";

import { shallow } from "enzyme";

import TrackItem from "./index";

describe("<TrackItem />", () => {
  it("Render default element", () => {
    const params = {
      number: 1,
      name: "Track name",
      duration: "1:23"
    };
    const wrapper = shallow(<TrackItem {...params} />);

    expect(wrapper.find(".trackItem").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem-active").exists()).toBeFalsy();
    expect(wrapper.find(".trackItem__number").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem__number").text()).toEqual(
      params.number + "."
    );
    expect(wrapper.find(".trackItem__name").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem__name").text()).toEqual(params.name);
    expect(wrapper.find(".trackItem__duration").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem__duration").text()).toEqual(
      params.duration
    );
  });

  it("Render default element actived", () => {
    const params = {
      number: 1,
      name: "Track name",
      duration: "1:23",
      active: true
    };
    const wrapper = shallow(<TrackItem {...params} />);

    expect(wrapper.find(".trackItem").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem-active").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem__number").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem__number").text()).toEqual(
      params.number + "."
    );
    expect(wrapper.find(".trackItem__name").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem__name").text()).toEqual(params.name);
    expect(wrapper.find(".trackItem__duration").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem__duration").text()).toEqual(
      params.duration
    );
  });

  it("Render default element with action", () => {
    const params = {
      number: 1,
      name: "Track name",
      duration: "1:23",
      action: jest.fn()
    };
    const wrapper = shallow(<TrackItem {...params} />);

    wrapper.find(".trackItem").simulate("click");

    expect(wrapper.find(".trackItem").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem-active").exists()).toBeFalsy();
    expect(wrapper.find(".trackItem__number").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem__number").text()).toEqual(
      params.number + "."
    );
    expect(wrapper.find(".trackItem__name").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem__name").text()).toEqual(params.name);
    expect(wrapper.find(".trackItem__duration").exists()).toBeTruthy();
    expect(wrapper.find(".trackItem__duration").text()).toEqual(
      params.duration
    );
    expect(params.action).toHaveBeenCalled();
  });
});
