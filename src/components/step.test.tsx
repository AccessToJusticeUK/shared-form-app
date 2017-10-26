import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Step } from "./step";
import { QuestionHeader } from "./questionHeader";

import "../setupTests";

describe("Step ", () => {

  let testHeader : any;
  let wrapper : ShallowWrapper;

      beforeEach(() => {
          testHeader = {
              title: "Step 1",
              description: "Question"
          }
          wrapper = shallow(<Step {...testHeader}/>)
      });

  it("renders a div containing a QuestionHeader", ()  => {
    expect(wrapper.contains(
      <div className="jumbotron">
        <QuestionHeader title="Step 1" description="Question"/>
      </div>
    )).toBe(true);
  });
});
