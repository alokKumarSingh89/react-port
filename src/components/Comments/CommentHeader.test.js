import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CommentHeader from "./CommentHeader";

const props = {
  classes: {}
};
describe("<CommentHeader> ", () => {
  it("<CommentHeader> snapshot ", () => {
    const wrapper = shallow(<CommentHeader {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
