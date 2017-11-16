import * as React from 'react';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { TabbedDirectory } from './TabbedDirectory';
import { StepStageProps } from './props.types';
import { Button } from './Button';
import * as classNames from 'classnames';

export const StepStage: React.StatelessComponent<StepStageProps> = (props) => {
    const nextButtonClassNames = classNames({
        'next-button button-large': true,
        'hidden': !props.canMoveToNext,
    });
    return (
        <div>
            {props.shouldBeOpen && 
                <div>
                    <div className="stage-content">
                        {props.questionAnswerSetProps &&
                            <QuestionAnswerSet
                                {...props.questionAnswerSetProps}
                                otherThing={(text) => props.setData && props.setData(props.stageOrder, text)}
                            />
                        }
                        {props.tabbedDirectoryProps && <TabbedDirectory {...props.tabbedDirectoryProps} />}
                    </div>
                    <div className="form-actions">
                        <Button
                            classNames={nextButtonClassNames}
                            onClickHandler={props.moveToNext}
                        >
                        Next Stage
                        </Button>
                    </div>
                </div>
            }
        </div>

  );
};
