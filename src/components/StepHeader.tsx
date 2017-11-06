import * as React from 'react';
import { StepHeaderProps } from './props.types';

export class StepHeader extends React.Component<StepHeaderProps, {}> {
    constructor(props: StepHeaderProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="step-heading-number">{this.props.title}&nbsp;{this.props.stepOrder} -&nbsp;</div>
                <div className="step-heading-question">{this.props.description}</div>
            </div>
        );
    }
}
