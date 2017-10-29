import * as React from "react";
import { QuestionHeader, IQuestionHeaderProps } from "./questionHeader";
import { Section, ISectionProps } from "./section";

export interface IStepProps {
    questionHeaderProps : IQuestionHeaderProps,
    sectionProps: ISectionProps
}

export function Step(props:IStepProps) {
    return (
        <div className="jumbotron">
            <QuestionHeader {...props.questionHeaderProps} />
            <Section {...props.sectionProps} />
        </div>
    );
}
