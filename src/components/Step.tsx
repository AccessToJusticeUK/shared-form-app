import * as React from 'react';
import { StepHeader } from './StepHeader';
import { Preamble } from './Preamble';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { StepProps } from './props.types';
import { TabbedDirectory } from './TabbedDirectory';

export class Step extends React.Component<StepProps, {completed: boolean, isInitiallyOpen: boolean}> {

    constructor(props: StepProps) {
        super(props);
        this.state = {
          completed: false,
          isInitiallyOpen: this.props.isInitiallyOpen,
        }
    }

    close = (previousStepsAnswerIdData: string) :void => {
      console.log(this.state.completed)

      this.setState({
        completed: true
      })
      console.log(this.state.completed)
      if (this.props.openNextStep) {
        this.props.openNextStep(previousStepsAnswerIdData);
      }
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="step">
                    <StepHeader {...this.props.questionHeaderProps} />
                    {this.state.isInitiallyOpen && !this.state.completed && (
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
