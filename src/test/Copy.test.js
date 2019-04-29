import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Copy from "../components/Tabs/Write/Copy/component";
import { wrap } from "module";

const props = {};
describe("<Copy>", () => {
  it("<Copy> snapshort ", () => {
    let wrapper = shallow(<Copy {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
