import * as React from "react";
import { QuestionHeader, IQuestionHeaderProps } from "./questionHeader";
import { Section, ISectionProps } from "./section";

export interface IStepProps {
    questionHeaderProps : IQuestionHeaderProps,
    sectionProps: ISectionProps
}

export class Step extends React.Component<IStepProps, IStepProps> {
    render() {
        return (
            <div className="jumbotron">
                <QuestionHeader {...this.props.questionHeaderProps} />
                <Section {...this.props.sectionProps} />
            </div>
        );
    }
}
