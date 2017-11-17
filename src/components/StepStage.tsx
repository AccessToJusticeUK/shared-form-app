import * as React from 'react';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { TabbedDirectory } from './TabbedDirectory';
import { PolicySelection } from './PolicySelection';
import { StepStageProps } from './props.types';
import { Button } from './Button';
import * as classNames from 'classnames';

export const StepStage: React.StatelessComponent<StepStageProps> = (props) => {
    const nextButtonClassNames = classNames({
        'next-button button-large': true,
        'hidden': false,
    });
    return (
        <div>
            {props.shouldBeOpen && 
                <div>
                    <div className="stage-content">
                        {props.questionAnswerSetProps &&
                            <QuestionAnswerSet
                                {...props.questionAnswerSetProps}
                                otherThing={(text) => console.log('take this text aka answer selection as we will need it')}
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
                    <div className="form-actions">
                        <Button
                            classNames={nextButtonClassNames}
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
