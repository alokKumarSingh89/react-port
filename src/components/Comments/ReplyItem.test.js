import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ReplyItem from "./ReplyItem";
const props = {
  classes: {}
};
describe("<CommentControls> ", () => {
  it("<CommentControls> snapshot ", () => {
    const wrapper = shallow(<ReplyItem {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
