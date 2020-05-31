import React from "react";

import { shallow } from "enzyme";

import Guide from "./index";

import { Input } from "Components";

describe("<Guide />", () => {
  it("Render default element", () => {
    const wrapper = shallow(<Guide />);

    expect(wrapper.find(".guide").exists()).toBeTruthy();
  });

  it("Render with content", () => {
    const guideProps = {
      content: <div>content</div>
    };
    const wrapper = shallow(<Guide {...guideProps} />);

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
    const guideProps = {
      bar: <div>bar</div>,
      content: <div>content</div>
    };
    const wrapper = shallow(<Guide {...guideProps} />);

    expect(wrapper.find(".guide").exists()).toBeTruthy();
    expect(wrapper.find(".guide__main").exists()).toBeTruthy();
    expect(
      wrapper.find(".guide__main").hasClass("guide__main__center")
    ).toBeFalsy();
    expect(wrapper.find(".guide__main__bar").exists()).toBeTruthy();
    expect(wrapper.find(".guide__main__content").exists()).toBeTruthy();
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
});
