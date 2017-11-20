import * as React from 'react';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { TabbedDirectory } from './TabbedDirectory';
import { PolicySelection } from './PolicySelection';
import { StepStageProps } from './props.types';
import { Button } from './Button';
import * as classNames from 'classnames';

export const StepStage: React.StatelessComponent<StepStageProps> = (props) => {
    const buttonClassNames = classNames({
        'button-large': true,
        'hidden': false,
    });
    return (
        <div>
            {props.shouldBeOpen &&
                <div className="step-stage">
                    <div className="stage-content">
                        {props.questionAnswerSetProps &&
                            <QuestionAnswerSet
                                {...props.questionAnswerSetProps}
                                onSelectAnswer={(text) => console.log('take this text aka answer selection as we will need it')}
                            />
                        }
                        {props.tabbedDirectoryProps && <TabbedDirectory {...props.tabbedDirectoryProps} />}
                        {props.policySelectionProps &&
                            <PolicySelection
                                {...props.policySelectionProps}
                                addAPolicyClicked={() => props.moveToNextStage && props.moveToNextStage(0)}
                            />
                        }
                    </div>
                    <div className="form-actions container--limited-width">
                        <Button
                            classNames={buttonClassNames}
                            onClickHandler={() => props.moveToNextStage && props.moveToNextStage(props.id)}
                        >
                        Next
                        </Button>
                    </div>
                </div>
            }
        </div>
  );
};