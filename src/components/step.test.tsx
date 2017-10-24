import * as React from "react";
import { shallow } from "enzyme";
import { Step } from "./step";
import { QuestionHeader } from "./questionHeader";

import "../setupTests";

describe("Step ", () => {

  let testHeader : any;
  let wrapper : any;

      beforeEach(() => {
          let title = "Example question";
          let description = "hey";
          testHeader = {
              title: title,
              description: description
          }
          wrapper = shallow(<Step {...testHeader}/>)
      });

  it("renders a div containing a QuestionHeader", ()  => {
    console.log(wrapper.debug());
    expect(wrapper.contains(
      <div className="jumbotron">
        <QuestionHeader title="Example question" description="hey"/>
      </div>
    )).toBe(true);
  });
});
