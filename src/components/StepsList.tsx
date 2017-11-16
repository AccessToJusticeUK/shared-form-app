import * as React from 'react';
import { Step } from './Step';
import { StepsListProps, StepProps } from './props.types';
import * as sortBy from 'sort-by';

export class StepsList extends React.Component<StepsListProps, {} > {
    render() {
      const steps = this.props.steps;
      steps.sort(sortBy('stepOrder'));

      return (
        <ul className="list-unstyled">
            {steps.map((step: StepProps) => (
                <li key={step.stepOrder}>
                    <Step
                        {...step}
                        openNextStep={(data) => this.props.moveToNext && this.props.moveToNext(data)}
                        shouldBeOpen={this.props.openAtIndex === step.stepOrder}
                    />
                </li>
            ))}
        </ul>);
    }
  }
