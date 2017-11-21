import * as React from 'react';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { TabbedDirectory } from './TabbedDirectory';
import { PolicySelection } from './PolicySelection';
import { StepStageProps } from './props.types';
import { Button } from './Button';
import * as classNames from 'classnames';

export class StepStage extends React.Component<StepStageProps, {activeAnswerText: string}> {
    constructor(props: StepStageProps) {
        super(props);
        this.state = {
            activeAnswerText: ''
        };
    }

    answerSelected = (text: string) => {
        this.setState({
            activeAnswerText: text
        });
    }

    resetAndMoveToNext = (prevStageId: number) => {
        if (this.props.moveToNextStage) {
            this.props.moveToNextStage(prevStageId);
        }

        this.setState({
            activeAnswerText: ''
        });
    }

    render() {
        const buttonClassNames = classNames({
            'button-large': true,
            'hidden': false,
        });

        return (
            <div>
                {this.props.shouldBeOpen &&
                    <div className="step-stage">
                        <div className="stage-content">
                            {this.props.questionAnswerSetProps &&
                                <QuestionAnswerSet
                                    {...this.props.questionAnswerSetProps}
                                    onSelectAnswer={(text) => this.answerSelected(text)}
                                />
                            }
                            {this.props.tabbedDirectoryProps &&
                                <TabbedDirectory
                                    {...this.props.tabbedDirectoryProps}
                                    onSelectAnswer={(text) => this.answerSelected(text)}
                                />
                            }
                            {this.props.policySelectionProps &&
                                <PolicySelection
                                    {...this.props.policySelectionProps}
                                    addAPolicyClicked={() => this.resetAndMoveToNext(0)}
                                />
                            }
                        </div>
                        <div className="form-actions container--question-width">
                            {(this.state.activeAnswerText !== '' || this.props.skipNextValidation) &&
                                <Button
                                    classNames={buttonClassNames}
                                    onClickHandler={() => this.resetAndMoveToNext(this.props.id)}
                                >
                                Next
                                </Button>
                            }
                        </div>
                    </div>
                }
            </div>
      );
    }
}
