import React from "react";

import { shallow } from "enzyme";

import PlayerButton from "./index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("<PlayerButton />", () => {
  it("Render default element with back icon", () => {
    const params = {
      type: "back"
    };
    const wrapper = shallow(<PlayerButton {...params} />);

    expect(
      wrapper.find(".button.button__" + params.type).exists()
    ).toBeTruthy();
    expect(wrapper.find(FontAwesomeIcon).prop("icon")).toEqual("step-backward");
  });

  it("Render default element with next icon", () => {
    const params = {
      type: "next"
    };
    const wrapper = shallow(<PlayerButton {...params} />);

    expect(
      wrapper.find(".button.button__" + params.type).exists()
    ).toBeTruthy();
    expect(wrapper.find(FontAwesomeIcon).prop("icon")).toEqual("step-forward");
  });

  it("Render default element with play icon", () => {
    const params = {
      type: "play"
    };
    const wrapper = shallow(<PlayerButton {...params} />);

    expect(
      wrapper.find(".button.button__" + params.type).exists()
    ).toBeTruthy();
    expect(wrapper.find(FontAwesomeIcon).prop("icon")).toEqual("play");
  });

  it("Render default element with pause icon", () => {
    const params = {
      type: "pause"
    };
    const wrapper = shallow(<PlayerButton {...params} />);

    expect(
      wrapper.find(".button.button__" + params.type).exists()
    ).toBeTruthy();
    expect(wrapper.find(FontAwesomeIcon).prop("icon")).toEqual("pause");
  });

  it("Render default element with click action", () => {
    const params = {
      action: jest.fn(),
      type: "pause"
    };
    const wrapper = shallow(<PlayerButton {...params} />);

    wrapper.find(".button").simulate("click");

    expect(
      wrapper.find(".button.button__" + params.type).exists()
    ).toBeTruthy();
    expect(wrapper.find(FontAwesomeIcon).prop("icon")).toEqual("pause");
    expect(params.action).toHaveBeenCalled();
  });
});
