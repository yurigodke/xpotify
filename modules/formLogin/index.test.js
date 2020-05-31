import React from "react";

import { shallow } from "enzyme";

import FormLogin from "./index";

import { Input } from "Components";

describe("<FormLogin />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<FormLogin />);

    expect(wrapper.find(".formLogin").exists()).toBeTruthy();
    expect(wrapper.find(Input)).toHaveLength(2);
  });
});
