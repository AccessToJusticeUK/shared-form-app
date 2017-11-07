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
                <div className="step">
                    <div className="step-heading">
                        <StepHeader {...this.props.questionHeaderProps} />
                    </div>
                    {this.props.isVisible === true &&
                        <div>
                            <hr className="step-divider" />
                            <div className="step-content">
                                <Preamble {...this.props.preambleProps} />
                                <QuestionAnswerSet {...this.props.questionAnswerSetProps} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
