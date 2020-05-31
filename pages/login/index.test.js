import React from "react";

import { shallow } from "enzyme";

import Login from "./index";

import { Guide, FormLogin } from "Modules";

describe("<Login />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find(Guide).exists()).toBeTruthy();
    expect(wrapper.prop("content")).toEqual(<FormLogin />);
  });
});
