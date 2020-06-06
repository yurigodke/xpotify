import React from "react";

import { shallow } from "enzyme";

import FormLogin from "./index";

import { Input, Button } from "Components";

describe("<FormLogin />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<FormLogin />);

    expect(wrapper.find(".formLogin").exists()).toBeTruthy();
    expect(wrapper.find(Input).length).toEqual(1);
    expect(wrapper.find(Button).length).toEqual(2);
  });

  it("Render default element with spotify login", () => {
    const params = {
      spotifyLogin: jest.fn()
    };
    const wrapper = shallow(<FormLogin {...params} />);

    const loginWithSpotifyFunc = wrapper
      .find(Button)
      .at(1)
      .prop("action");

    loginWithSpotifyFunc();

    expect(wrapper.find(".formLogin").exists()).toBeTruthy();
    expect(wrapper.find(Input).length).toEqual(1);
    expect(wrapper.find(Button).length).toEqual(2);
    expect(params.spotifyLogin).toHaveBeenCalled();
  });

  it("Render default element with set token action", () => {
    const params = {
      setInputToken: jest.fn()
    };
    const wrapper = shallow(<FormLogin {...params} />);

    const tokenInputFunc = wrapper.find(Input).prop("getValue");
    tokenInputFunc("teste-token");

    const loginWithSpotifyFunc = wrapper
      .find(Button)
      .at(0)
      .prop("action");

    loginWithSpotifyFunc();

    expect(wrapper.find(".formLogin").exists()).toBeTruthy();
    expect(wrapper.find(Input).length).toEqual(1);
    expect(wrapper.find(Button).length).toEqual(2);
    expect(params.setInputToken).toHaveBeenCalledWith("teste-token");
  });
});
