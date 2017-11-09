import * as React from 'react';
import { StepHeaderProps } from './props.types';

export class StepHeader extends React.Component<StepHeaderProps, {}> {
    constructor(props: StepHeaderProps) {
        super(props);
    }

    render() {
        return (
            <div className="step-header">
                <h2>
                    <span className="step-header-number">{this.props.title}&nbsp;{this.props.stepOrder} -&nbsp;</span>
                    <span className="step-header-question">{this.props.description}</span>
                </h2>
            </div>
        );
    }
}
