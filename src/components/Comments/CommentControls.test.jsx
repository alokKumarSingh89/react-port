import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CommentControls from "./CommentControls";

const props = {
  classes: {}
};
describe("<CommentControls> ", () => {
  it("<CommentControls> snapshot ", () => {
    const wrapper = shallow(<CommentControls {...props} />);
    console.log(wrapper.prop());
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
