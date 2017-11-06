import * as React from 'react';
import { Step } from './Step';
import { StepsListProps, StepProps } from './props.types';
import * as sortBy from 'sort-by';
// const sortBy = require('sort-by'); // TODO why doesn't es6 import work here?

export class StepsList extends React.Component<StepsListProps, {}> {
    constructor(props: StepsListProps) {
        super(props);
    }

    render() {
        const steps = this.props.steps;
        steps.sort(sortBy('stepOrder'));
        
        return (
            <div>
                <ul className="list-unstyled">
                    {steps.map((step: StepProps) =>
                        <li key={step.stepOrder}>
                            <Step {...step} />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
