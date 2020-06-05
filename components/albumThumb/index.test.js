import React from "react";

import { shallow } from "enzyme";

import AlbumThumb from "./index";

describe("<AlbumThumb />", () => {
  it("Render default element", () => {
    const params = {
      image: "http://www.url.image/test.jpg",
      title: "Album title",
      subtitle: "Album subtitle"
    };
    const wrapper = shallow(<AlbumThumb {...params} />);

    expect(
      wrapper.find(".albumThumb__image .albumThumb__image__item").prop("src")
    ).toEqual(params.image);
    expect(wrapper.find(".albumThumb__title").text()).toEqual(params.title);
    expect(wrapper.find(".albumThumb__subtitle").text()).toEqual(
      params.subtitle
    );
  });

  it("Render default element with click action", () => {
    const params = {
      image: "http://www.url.image/test.jpg",
      title: "Album title",
      subtitle: "Album subtitle",
      onClick: jest.fn()
    };
    const wrapper = shallow(<AlbumThumb {...params} />);

    wrapper.find(".albumThumb").simulate("click");

    expect(
      wrapper.find(".albumThumb__image .albumThumb__image__item").prop("src")
    ).toEqual(params.image);
    expect(wrapper.find(".albumThumb__title").text()).toEqual(params.title);
    expect(wrapper.find(".albumThumb__subtitle").text()).toEqual(
      params.subtitle
    );
    expect(params.onClick).toHaveBeenCalled();
  });
});
