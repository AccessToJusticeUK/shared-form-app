import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Step, StepProps } from "../../components/step";
import { QuestionHeader } from "../../components/questionHeader";
import { Section } from "../../components/section";
import { QuestionAnswerSet } from "../../components/questionAnswerSet";
import "../../setupTests";

describe("Step ", () => {

  let stepProps: StepProps;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    stepProps = {
      questionHeaderProps: {
        title: "Step 1",
        description: "Question"
      },

      sectionProps: {
        isVisible: true,
        innerHTML: "Section"
      },

      questionAnswerSetProps: {
        question: "Question"
      }
    };
    wrapper = shallow(<Step {...stepProps} />)
  });

  it("renders a div containing a QuestionHeader, Section and QuestionAnswerSet", () => {
    expect(wrapper.contains(
      <div className="jumbotron">
        <QuestionHeader {...stepProps.questionHeaderProps} />
        <Section {...stepProps.sectionProps} />
        <QuestionAnswerSet {...stepProps.questionAnswerSetProps} />
      </div>
    )).toBe(true);
  });
});
