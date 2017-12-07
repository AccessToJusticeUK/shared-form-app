import * as React from 'react';
import { StepHeader } from './StepHeader';
import { Preamble } from './Preamble';
import { StepProps, StepStageProps } from './props.types';
import { StepStage } from './StepStage';

export class Step extends React.Component<StepProps, {insuranceProviderList: string[], insuranceTypeList: string[] }> {
    // TODO: move the data updating responsibilities out of this class somehow and make it functional again. When we have a proper form data strate
    constructor(props: StepProps) {
        super(props);
        this.state = {
            insuranceTypeList: [],
            insuranceProviderList: []
        };
    }
    concatedInsuranceTypesAndProvidersList() {
        return this.state.insuranceTypeList.map((e,i) =>
            e + ' insurance supplied by ' + this.state.insuranceProviderList[i]
        );
    }

    updateProviderOrTypeList(othertext: string, text: string) {
        // the following if block is necessary as updatePolicyList is called with either othertext or text but never both due to how navigation works
        if (othertext.length > 0) {
            this.setState({
                insuranceTypeList: [...this.state.insuranceTypeList, othertext]                
            });
        } else {
            this.setState({
                insuranceProviderList: [...this.state.insuranceProviderList, text ],
            });
        }
    }
    render() {
        return (
            <div className="jumbotron">
                <div className="step">
                    <StepHeader 
                        {...this.props.stepHeaderProps}
                        isComplete={this.props.lastStepCompleted ? this.props.id <= this.props.lastStepCompleted : false} 
                    />
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
                                        updatePolicyList={(othertext, text) => this.updateProviderOrTypeList(othertext, text)}
                                        insuranceProviderList={this.concatedInsuranceTypesAndProvidersList()}
                                    />
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
