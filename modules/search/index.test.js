import React from "react";

import { shallow } from "enzyme";

import Search from "./index";

import { Input } from "Components";

describe("<Search />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<Search />);

    const getValueFunc = wrapper.find(Input).prop("getValue");
    getValueFunc();

    expect(wrapper.find(".search").exists()).toBeTruthy();
    expect(wrapper.find(Input).exists()).toBeTruthy();
  });

  it("Render default element with func return", () => {
    const params = {
      getTerm: jest.fn()
    };
    const wrapper = shallow(<Search {...params} />);

    const getValueFunc = wrapper.find(Input).prop("getValue");
    getValueFunc("Search term");

    expect(wrapper.find(".search").exists()).toBeTruthy();
    expect(wrapper.find(Input).exists()).toBeTruthy();
    expect(params.getTerm).toHaveBeenCalledWith("Search term");
  });
});
