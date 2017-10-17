import * as React from "react";
import { shallow } from "enzyme";
import { Section } from "../components/Section";

import "../setupTests";

describe("Section ", () => {
  it("renders a div", function() {
    expect(shallow(<Section />)
      .contains(<div>Section</div>)).toBe(true);
  });
});
