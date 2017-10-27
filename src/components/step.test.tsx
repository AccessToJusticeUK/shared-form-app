import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Step, IStepProps } from "./step";
import { QuestionHeader } from "./questionHeader";
import { Section } from "./section";
import "../setupTests";

describe("Step ", () => {

  let stepProps : IStepProps;
  let wrapper : ShallowWrapper;

      beforeEach(() => {
          stepProps = {
            questionHeaderProps: {
              title: "Step 1",
              description: "Question"
            },
          
            sectionProps: {
              isVisible: true,
              innerHTML: "Section"
            }
          };
          wrapper = shallow(<Step {...stepProps}/>)
      });

  it("renders a div containing a QuestionHeader", ()  => {
    expect(wrapper.contains(
      <div className="jumbotron">
        <QuestionHeader title="Step 1" description="Question" />
        <Section isVisible={true} innerHTML="Section" />
      </div>
    )).toBe(true);
  });
});
