import React from "react";

import Bar from "./index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { wrapperRedux } from "Mocks";

describe("<Bar />", () => {
  it("Render default element", () => {
    const wrapperCont = new wrapperRedux(<Bar />);
    const wrapper = wrapperCont.getBaseElement();

    const logoutButton = wrapper.find(".bar__button");

    expect(wrapper.find(".bar").exists()).toBeTruthy();
    expect(wrapper.find(".bar__img .bar__img__item").exists()).toBeTruthy();
    expect(logoutButton.find(FontAwesomeIcon).exists()).toBeTruthy();
    expect(logoutButton.find(".bar__button__text").exists()).toBeTruthy();
  });

  it("Render default element with action", () => {
    const wrapperCont = new wrapperRedux(<Bar />);
    const wrapper = wrapperCont.getBaseElement();

    const logoutButton = wrapper.find(".bar__button");

    expect(wrapper.find(".bar").exists()).toBeTruthy();
    expect(wrapper.find(".bar__img .bar__img__item").exists()).toBeTruthy();
    expect(logoutButton.find(FontAwesomeIcon).exists()).toBeTruthy();
    expect(logoutButton.find(".bar__button__text").exists()).toBeTruthy();
    expect(logoutButton.prop("onClick")).toEqual(wrapper.prop("clearToken"));
  });
});
