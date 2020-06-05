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

  it("Render default element with placeHolder", () => {
    const params = {
      placeHolder: "Teste"
    };
    const wrapper = shallow(<Input {...params} />);

    expect(wrapper.find(".input").exists()).toBeTruthy();
    expect(wrapper.find(".input__title").exists()).toBeFalsy();
    expect(wrapper.find(".input__placeHolder").exists()).toBeTruthy();
    expect(wrapper.find(".input__placeHolder").text()).toEqual(
      params.placeHolder
    );
    expect(wrapper.find(".input__writter").exists()).toBeTruthy();
  });

  it("Render default element with placeHolder and title", () => {
    const params = {
      placeHolder: "Teste",
      title: "Title name"
    };
    const wrapper = shallow(<Input {...params} />);

    expect(wrapper.find(".input").exists()).toBeTruthy();
    expect(wrapper.find(".input__title").exists()).toBeTruthy();
    expect(wrapper.find(".input__title").text()).toEqual(params.title);
    expect(wrapper.find(".input__placeHolder").exists()).toBeTruthy();
    expect(wrapper.find(".input__placeHolder").text()).toEqual(
      params.placeHolder
    );
    expect(wrapper.find(".input__writter").exists()).toBeTruthy();
  });

  it("Render default element with placeHolder, title and type", () => {
    const params = {
      placeHolder: "Teste",
      title: "Title name",
      type: "password"
    };
    const wrapper = shallow(<Input {...params} />);

    expect(wrapper.find(".input").exists()).toBeTruthy();
    expect(wrapper.find(".input__title").exists()).toBeTruthy();
    expect(wrapper.find(".input__title").text()).toEqual(params.title);
    expect(wrapper.find(".input__placeHolder").exists()).toBeTruthy();
    expect(wrapper.find(".input__placeHolder").text()).toEqual(
      params.placeHolder
    );
    expect(wrapper.find(".input__writter").exists()).toBeTruthy();
    expect(wrapper.find(".input__writter").prop("type")).toEqual(params.type);
  });

  it("Render default element with className", () => {
    const params = {
      className: "testClass"
    };
    const wrapper = shallow(<Input {...params} />);

    expect(wrapper.find("." + params.className).exists()).toBeTruthy();
    expect(wrapper.find(".input").exists()).toBeTruthy();
    expect(wrapper.find(".input__title").exists()).toBeFalsy();
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

  it("Test input values with getValue", () => {
    let returnedValue = "";
    const params = {
      getValue: value => (returnedValue = value)
    };
    const wrapper = shallow(<Input {...params} />);

    const inputElm = wrapper.find("input");

    const inputText = "Teste Val";

    inputElm.simulate("change", {
      target: {
        value: inputText
      }
    });

    expect(wrapper.state("value")).toEqual(inputText);
    expect(returnedValue).toEqual(inputText);
  });
});
