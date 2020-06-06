import React from "react";

import { shallow } from "enzyme";

import Guide from "./index";

describe("<Guide />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<Guide />);

    expect(wrapper.find(".guide").exists()).toBeTruthy();
  });

  it("Render with content", () => {
    const wrapper = shallow(
      <Guide>
        <div>content</div>
      </Guide>
    );

    expect(wrapper.find(".guide").exists()).toBeTruthy();
    expect(wrapper.find(".guide__main").exists()).toBeTruthy();
    expect(wrapper.find(".guide__main__bar").exists()).toBeFalsy();
    expect(
      wrapper.find(".guide__main").hasClass("guide__main__center")
    ).toBeTruthy();
    expect(
      wrapper
        .find(".guide__main")
        .children()
        .html()
    ).toEqual("<div>content</div>");
  });

  it("Render with content and bar", () => {
    const params = {
      bar: <div>bar</div>
    };
    const wrapper = shallow(
      <Guide {...params}>
        <div>content</div>
      </Guide>
    );

    expect(wrapper.find(".guide").exists()).toBeTruthy();
    expect(wrapper.find(".guide__main").exists()).toBeTruthy();
    expect(
      wrapper.find(".guide__main").hasClass("guide__main__center")
    ).toBeFalsy();
    expect(
      wrapper
        .find(".guide__main__bar")
        .children()
        .html()
    ).toEqual("<div>bar</div>");
    expect(
      wrapper
        .find(".guide__main__content")
        .children()
        .html()
    ).toEqual("<div>content</div>");
  });

  it("Render with bottom", () => {
    const guideProps = {
      bottom: <div>bottom</div>
    };
    const wrapper = shallow(<Guide {...guideProps} />);

    expect(wrapper.find(".guide").exists()).toBeTruthy();
    expect(wrapper.find(".guide__main").exists()).toBeFalsy();
    expect(wrapper.find(".guide__main__bar").exists()).toBeFalsy();
    expect(wrapper.find(".guide__main__content").exists()).toBeFalsy();
    expect(
      wrapper
        .find(".guide__bottom")
        .children()
        .html()
    ).toEqual("<div>bottom</div>");
  });

  it("Render with content, bar and bottom", () => {
    const params = {
      bar: <div>bar</div>,
      bottom: <div>bottom</div>
    };
    const wrapper = shallow(
      <Guide {...params}>
        <div>content</div>
      </Guide>
    );

    expect(wrapper.find(".guide").exists()).toBeTruthy();
    expect(wrapper.find(".guide__main").exists()).toBeTruthy();
    expect(
      wrapper.find(".guide__main").hasClass("guide__main__center")
    ).toBeFalsy();
    expect(
      wrapper
        .find(".guide__main__bar")
        .children()
        .html()
    ).toEqual("<div>bar</div>");
    expect(
      wrapper
        .find(".guide__main__content")
        .children()
        .html()
    ).toEqual("<div>content</div>");
    expect(
      wrapper
        .find(".guide__bottom")
        .children()
        .html()
    ).toEqual("<div>bottom</div>");
  });
});
