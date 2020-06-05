import React from "react";

import { shallow } from "enzyme";

import Timeline from "./index";

describe("<Timeline />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<Timeline />);

    expect(wrapper.find(".timeline").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".timeline__text")
        .at(0)
        .text()
    ).toEqual("00:00");
    expect(
      wrapper
        .find(".timeline__text")
        .at(1)
        .text()
    ).toEqual("00:00");
    expect(
      wrapper.find(".timeline__cursor .timeline__cursor__fill").prop("style")
        .width
    ).toBeUndefined();
  });

  it("Render default element with time and total", () => {
    const params = {
      time: 6,
      total: 100
    };
    const wrapper = shallow(<Timeline {...params} />);

    expect(wrapper.find(".timeline").exists()).toBeTruthy();
    expect(
      wrapper
        .find(".timeline__text")
        .at(0)
        .text()
    ).toEqual("00:06");
    expect(
      wrapper
        .find(".timeline__text")
        .at(1)
        .text()
    ).toEqual("01:40");
    expect(
      wrapper.find(".timeline__cursor .timeline__cursor__fill").prop("style")
        .width
    ).toEqual("6%");
  });
});
