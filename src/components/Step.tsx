import * as React from 'react';
import { StepHeader } from './StepHeader';
import { Preamble } from './Preamble';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { StepProps } from './props.types';

export class Step extends React.Component<StepProps, {}> {
    constructor(props: StepProps) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="step-heading">
                    <StepHeader {...this.props.questionHeaderProps} />
                </div>
                <hr className="step-content-divider" />
                <div className="step-content">
                    <Preamble {...this.props.sectionProps} />
                    <QuestionAnswerSet {...this.props.questionAnswerSetProps} />
                </div>
            </div>
        );
    }
}
