import React from "react";

import { shallow } from "enzyme";

import Search from "./index";

import { Input } from "Components";

describe("<Search />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.find(".search").exists()).toBeTruthy();
  });
});
