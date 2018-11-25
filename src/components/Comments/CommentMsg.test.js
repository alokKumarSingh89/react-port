import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CommentMsg from "./CommentMsg";
const props = {
  classes: {}
};
describe("<CommentHeader> ", () => {
  it("<CommentHeader> snapshot ", () => {
    const wrapper = shallow(<CommentMsg {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
