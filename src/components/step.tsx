import * as React from 'react';
import { QuestionHeader } from './questionHeader';
import { Section } from './section';
import { QuestionAnswerSet } from './questionAnswerSet';
import { StepProps } from './props.types';

export class Step extends React.Component<StepProps, {}> {
    constructor(props: StepProps) {
        super(props);
    }
    
    render() {
        return (
            <div className="jumbotron">
                <div className="step-content">
                    <QuestionHeader {...this.props.questionHeaderProps} />
                    <Section {...this.props.sectionProps} />
                    <QuestionAnswerSet {...this.props.questionAnswerSetProps} />
                </div>
            </div>
        );
    }
}
