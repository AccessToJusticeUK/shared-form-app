import * as React from "react";
import { shallow } from "enzyme";
import { Section } from "./section";

import "../setupTests";

describe("Section ", () => {
  let testHeader : any = {
    isVisible: true,
    innerHTML: "Section"
  };
  let wrapper : any;
  let sectionDiv : any;

  it("renders a div with innerHTML and isVisible properties", () => {
    wrapper = shallow(<Section {...testHeader}/>);
    sectionDiv = <div><Section isVisible={true} innerHTML="Section" /></div>;

    expect(wrapper.contains(sectionDiv)).toBe(true);
  });
});
