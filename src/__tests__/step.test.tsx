import * as React from "react";
import { shallow } from "enzyme";
import { Step } from "../components/Step";

import "../setupTests";

describe("Step ", () => {
  it("renders a div", function() {
    expect(shallow(<Step />)
      .contains(<div>Step</div>)).toBe(true);
  });
});
