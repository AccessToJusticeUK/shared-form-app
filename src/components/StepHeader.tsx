import * as React from 'react';
import { StepHeaderProps } from './props.types';
import { Icon } from './Icon';

export const StepHeader: React.StatelessComponent<StepHeaderProps> = props => {
    return (
        <div className="step-header">
            <h2 className="step-header-title">
                <span className="step-header-number">{props.title}&nbsp;{props.stepOrder} -&nbsp;</span>
                <span className="step-header-question">{props.description}</span>
            </h2>
            { props.isStepComplete &&
                <Icon text="Step complete" classNames="checkmark-icon" imgSrc={require('../styling/images/checkmark-icon.png')} />
            }
        </div>
    );
};
