import React from "react";

import { shallow } from "enzyme";

import AlbumCover from "./index";

describe("<AlbumCover />", () => {
  it("Render default element", () => {
    const params = {
      image: "http://www.url.image/test.jpg",
      title: "Album title",
      subtitle: "Album subtitle"
    };
    const wrapper = shallow(<AlbumCover {...params} />);

    expect(
      wrapper.find(".albumCover__image .albumCover__image__item").prop("src")
    ).toEqual(params.image);
    expect(wrapper.find(".albumCover__title").text()).toEqual(params.title);
    expect(wrapper.find(".albumCover__subtitle").text()).toEqual(
      params.subtitle
    );
  });
});
