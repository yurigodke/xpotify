import React from "react";

import { shallow } from "enzyme";

import Button from "./index";

describe("<Button />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<Button>Teste BTN</Button>);

    expect(wrapper.find(".button").exists()).toBeTruthy();
    expect(wrapper.find(".button").text()).toEqual("Teste BTN");
  });

  it("Render default element with click action", () => {
    const params = {
      action: jest.fn()
    };
    const wrapper = shallow(<Button {...params}>Teste BTN</Button>);

    wrapper.find(".button").simulate("click");

    expect(wrapper.find(".button").exists()).toBeTruthy();
    expect(wrapper.find(".button").text()).toEqual("Teste BTN");
    expect(params.action).toHaveBeenCalled();
  });
});
