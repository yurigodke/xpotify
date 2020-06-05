import React from "react";

import { shallow } from "enzyme";

import AlbumProfile from "./index";

describe("<AlbumProfile />", () => {
  it("Render default element", () => {
    const params = {
      image: "http://www.url.image/test.jpg",
      title: "Album title",
      subtitle: "Album subtitle"
    };
    const wrapper = shallow(<AlbumProfile {...params} />);

    expect(
      wrapper
        .find(".albumProfile__image .albumProfile__image__item")
        .prop("src")
    ).toEqual(params.image);
    expect(
      wrapper.find(".albumProfile__text .albumProfile__text__title").text()
    ).toEqual(params.title);
    expect(
      wrapper.find(".albumProfile__text .albumProfile__text__subtitle").text()
    ).toEqual(params.subtitle);
  });

  it("Render default element with click action", () => {
    const params = {
      image: "http://www.url.image/test.jpg",
      title: "Album title",
      subtitle: "Album subtitle",
      onClick: jest.fn()
    };
    const wrapper = shallow(<AlbumProfile {...params} />);

    wrapper.find(".albumProfile").simulate("click");

    expect(
      wrapper
        .find(".albumProfile__image .albumProfile__image__item")
        .prop("src")
    ).toEqual(params.image);
    expect(
      wrapper.find(".albumProfile__text .albumProfile__text__title").text()
    ).toEqual(params.title);
    expect(
      wrapper.find(".albumProfile__text .albumProfile__text__subtitle").text()
    ).toEqual(params.subtitle);
    expect(params.onClick).toHaveBeenCalled();
  });
});
