import * as React from 'react';
import { StepHeader } from './StepHeader';
import { Preamble } from './Preamble';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { StepProps } from './props.types';
import { StepState } from './state.types';
import { TabbedDirectory } from './TabbedDirectory';

export class Step extends React.Component<StepProps, StepState> {
    constructor(props: StepProps) {
        super(props);
        this.state = {
            isStepComplete: false
        };
    }

    handleNextButtonClick = (previousStepsAnswerIdData: string): void => {
      if (this.props.openNextStep) {
        this.props.openNextStep(previousStepsAnswerIdData);
      }
      this.setState({
          isStepComplete: true
      });
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="step">
                    <StepHeader {...this.props.stepHeaderProps} isStepComplete={this.state.isStepComplete} />
                    {this.props.shouldBeOpen && (
                        <div>
                            <hr className="divider" />
                            <div className="step-content">
                                <Preamble {...this.props.preambleProps} />
                                {this.props.questionAnswerSetProps &&
                                    <QuestionAnswerSet
                                        {...this.props.questionAnswerSetProps}
                                        handleNextButtonClick={(data) => this.handleNextButtonClick(data)}
                                    />
                                }
                                {this.props.tabbedDirectoryProps && <TabbedDirectory {...this.props.tabbedDirectoryProps} />}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
