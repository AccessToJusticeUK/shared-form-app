import * as React from 'react';
import { StepHeader } from './StepHeader';
import { Preamble } from './Preamble';
import { StepProps, StepStageProps } from './props.types';
import { StepStage } from './StepStage';
import { Button } from './Button';
import * as classNames from 'classnames';

export const Step: React.StatelessComponent<StepProps> = (props) => {
    const nextButtonClassNames = classNames({
        'next-button button-large': true,
        'hidden': !props.canMoveToNext,
    });

    return (
        <div className="jumbotron">
            <div className="step">
                <StepHeader {...props.stepHeaderProps} completeAtIndex={props.completeAtIndex} />
                {props.shouldBeOpen && (
                    <div>
                        <hr className="divider" />
                        <Preamble {...props.preambleProps} />
                        {
                            props.stages.map((stage: StepStageProps) => (
                                <StepStage {...stage}
                                    key={stage.stageOrder}
                                    canMoveToNext={props.canMoveToNext}
                                    setData={props.setData}
                                    shouldBeOpen={(props.openAtIndex || 0) % props.stages.length === stage.stageOrder}                                                                        
                                />
                            ))
                        }
                        <div className="form-actions">
                            <Button
                                classNames={nextButtonClassNames}
                                onClickHandler={props.moveToNext}
                            >
                            Next Step
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
