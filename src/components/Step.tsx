import * as React from 'react';
import { StepHeader } from './StepHeader';
import { Preamble } from './Preamble';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { StepProps } from './props.types';
import { TabbedDirectory } from './TabbedDirectory';

export class Step extends React.Component<StepProps, {}> {

    close = (previousStepsAnswerIdData: string): void => {
      if (this.props.openNextStep) {
        this.props.openNextStep(previousStepsAnswerIdData);
      }
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="step">
                    <StepHeader {...this.props.questionHeaderProps} />
                    {this.props.shouldBeOpen && (
                        <div>
                            <hr className="divider" />
                            <div className="step-content">
                                <Preamble {...this.props.preambleProps} />
                                <QuestionAnswerSet {...this.props.questionAnswerSetProps} handleNextButtonClick={(data) => this.close(data)} />
                                {this.props.tabbedDirectoryProps && <TabbedDirectory {...this.props.tabbedDirectoryProps} />}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
