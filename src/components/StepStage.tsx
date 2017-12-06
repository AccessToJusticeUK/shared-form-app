import * as React from 'react';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { TabbedDirectory } from './TabbedDirectory';
import { PolicySelection } from './PolicySelection';
import { StepStageProps } from './props.types';
import { Button } from './Button';

export class StepStage extends React.Component<StepStageProps, { activeAnswerText: string, selectedPolicies: string[] }> {
    constructor(props: StepStageProps) {
        super(props);
        this.state = {
            activeAnswerText: '',
            selectedPolicies: []
        };
    }

    answerSelected = (text: string) => {
        this.setState({
            activeAnswerText: text
        });
    }

    appendPolicy = (text: string) => {
        console.log('before: ' + this.state.selectedPolicies);
        this.setState({ selectedPolicies: [...this.state.selectedPolicies, text] }, () => {
            console.log('after: ' + this.state.selectedPolicies);
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
                                    onSelectAnswer={(text) => { this.answerSelected(text); this.appendPolicy(text); }}
                                />
                            }
                            { console.log("before policy call: " + this.state.selectedPolicies) }
                            {this.props.policySelectionProps &&
                                <PolicySelection
                                    {...this.props.policySelectionProps}
                                    policies={this.state.selectedPolicies}
                                    addAPolicyClicked={() => this.resetAndMoveToNext(0)}
                                />
                            }
                        </div>
                        <div className="form-actions container--question-width">
                            {(this.state.activeAnswerText !== '' || this.props.skipNextValidation) &&
                                <Button
                                    classNames="button-large"
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
