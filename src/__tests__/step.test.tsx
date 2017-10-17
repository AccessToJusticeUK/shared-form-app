import * as React from "react";
import { shallow } from "enzyme";
import { Step } from "../components/Step";
import { QuestionHeader } from "../components/questionHeader";

import "../setupTests";

describe("Step ", () => {
  
  let testHeader : any;
  let wrapper : any;

      beforeEach(() => {
          let title = "Example question";
          testHeader = {
              title: title
          }
          wrapper = shallow(<Step {...testHeader}/>)
      });

  it("renders a div containing a QuestionHeader", ()  => {
    expect(wrapper.contains( <div>
      <QuestionHeader title="Example question" />
    </div>)).toBe(true);
  });
});
