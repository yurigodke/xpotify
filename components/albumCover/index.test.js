import React from "react";

import { shallow } from "enzyme";

import Button from "./index";

describe("<Button />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find(".button").exists()).toBeTruthy();
  });
});
