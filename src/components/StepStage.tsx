import * as React from 'react';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { TabbedDirectory } from './TabbedDirectory';
import { PolicySelection } from './PolicySelection';
import { StepStageProps } from './props.types';
import { Button } from './Button';

export class StepStage extends React.Component<StepStageProps, { activeAnswerText: string, activePolicySelected: string}> {
    constructor(props: StepStageProps) {
        super(props);
        this.state = {
            activeAnswerText: '',
            activePolicySelected: '',
        };
    }

    answerSelected = (text: string) => {
        this.setState({
            activeAnswerText: text
        });
    }

    policySelected = (text :string) => {
        this.setState({
            activePolicySelected: text,
            activeAnswerText: ''
        });
    }

    resetAndMoveToNext = (prevStageId: number) => {
        if (this.props.moveToNextStage) {
            this.props.moveToNextStage(prevStageId);
        }
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
                                    onSelectAnswer={(text) => { this.policySelected(text)}}
                                />
                            }
                        
                            {this.props.policySelectionProps && this.props.policyList &&
                                <PolicySelection
                                    {...this.props.policySelectionProps}
                                    policies={this.props.policyList}
                                    addAPolicyClicked={() => this.resetAndMoveToNext(0)}
                                />
                            }
                        </div>
                        <div className="form-actions container--question-width">
                            {((this.state.activeAnswerText !== '' || this.state.activePolicySelected !== '') || this.props.skipNextValidation) &&
                                <Button
                                    classNames="button-large"
                                    onClickHandler={() => { this.props.updatePolicyList && this.props.updatePolicyList(this.state.activeAnswerText, this.state.activePolicySelected); this.resetAndMoveToNext(this.props.id);}}
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
