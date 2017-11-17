import * as React from 'react';
import { StepHeader } from './StepHeader';
import { Preamble } from './Preamble';
import { StepProps, StepStageProps } from './props.types';
import { StepStage } from './StepStage';

export const Step: React.StatelessComponent<StepProps> = (props) => {
    return (
        <div className="jumbotron">
            <div className="step">
                <StepHeader {...props.stepHeaderProps} completeAtIndex={props.nextToComplete && props.nextToComplete - 1} />
                {props.shouldBeOpen && (
                    <div className="step-content">
                        <hr className="divider" />
                        <Preamble {...props.preambleProps} />
                        {
                            props.stages.map((stage: StepStageProps) => (
                                <StepStage
                                    {...stage}
                                    key={stage.id}
                                    shouldBeOpen={(props.nextToComplete || 1 % props.stages.length) === stage.id}
                                    moveToNextStage={props.moveToNext}
                                />
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};
