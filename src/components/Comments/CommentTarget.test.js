import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CommentTarget from "./CommentTarget";
const props = {
  classes: {}
};
describe("<CommentTarget> ", () => {
  it("<CommentControls> snapshot ", () => {
    const wrapper = shallow(<CommentTarget {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
