import React from "react";

import { shallow } from "enzyme";

import Input from "./index";

describe("<Input />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.find(".input").exists()).toBeTruthy();
    expect(wrapper.find(".input__title").exists()).toBeFalsy();
    expect(wrapper.find(".input__placeHolder").exists()).toBeFalsy();
    expect(wrapper.find(".input__writter").exists()).toBeTruthy();
  });

  it("Render with placeHolder", () => {
    const wrapper = shallow(<Input placeHolder="Teste" />);

    expect(wrapper.find(".input").exists()).toBeTruthy();
    expect(wrapper.find(".input__title").exists()).toBeFalsy();
    expect(wrapper.find(".input__placeHolder").exists()).toBeTruthy();
    expect(wrapper.find(".input__writter").exists()).toBeTruthy();
  });

  it("Render with title", () => {
    const wrapper = shallow(<Input title="Title name" />);

    expect(wrapper.find(".input").exists()).toBeTruthy();
    expect(wrapper.find(".input__title").exists()).toBeTruthy();
    expect(wrapper.find(".input__placeHolder").exists()).toBeFalsy();
    expect(wrapper.find(".input__writter").exists()).toBeTruthy();
  });

  it("Test input values", () => {
    const wrapper = shallow(<Input />);

    const inputElm = wrapper.find("input");

    const inputText = "Teste Val";

    inputElm.simulate("change", {
      target: {
        value: inputText
      }
    });

    expect(wrapper.state("value")).toEqual(inputText);
  });
});
