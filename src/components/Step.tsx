import * as React from 'react';
import { StepHeader } from './StepHeader';
import { Preamble } from './Preamble';
import { StepProps, StepStageProps } from './props.types';
import { StepStage } from './StepStage';

export class Step extends React.Component<StepProps, {policyList :string[], insuranceTypeList: string[] }> {

    constructor(props: StepProps) {
        super(props);
        this.state = {
            insuranceTypeList: [],
            policyList: []
        }
    }

    thing() {
        return this.state.insuranceTypeList.map((e,i)=> e+' supplied by '+this.state.policyList[i])
    }

    updatePolicyList(othertext: string, text: string) {
        //the following if block is necessary as updatePolicyList is called with either othertext or text but never both due to how navigation works
        if (othertext.length > 0) {
            this.setState({
                insuranceTypeList: [...this.state.insuranceTypeList, othertext]                
            })
        } else {
            this.setState({
                policyList: [...this.state.policyList, text ],
            })
        }
    }
    render() {
        return (
            <div className="jumbotron">
                <div className="step">
                    <StepHeader {...this.props.stepHeaderProps} isComplete={this.props.lastStepCompleted ? this.props.id <= this.props.lastStepCompleted : false} />
                    {this.props.shouldBeOpen && (
                        <div className="step-content">
                            <hr className="divider" />
                            <Preamble {...this.props.preambleProps} />
                            {
                                this.props.stages.map((stage: StepStageProps) => (
                                    <StepStage
                                        {...stage}
                                        key={stage.id}
                                        shouldBeOpen={(this.props.nextToComplete || 1 % this.props.stages.length) === stage.id}
                                        moveToNextStage={this.props.moveToNext}
                                        updatePolicyList={(othertext, text) => this.updatePolicyList(othertext, text)}
                                        policyList={this.thing()}
                                    />
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        );
    }
};
