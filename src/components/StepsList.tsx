import * as React from 'react';
import { Step } from './Step';
import * as sortBy from 'sort-by';
import { StepsListProps, StepProps } from './props.types';

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
                  {steps.map((step: StepProps) => (
                     <li key={step.stepOrder}>
                          <Step {...step} openNextStep={(data) => true} isInitiallyOpen={true}/>
                     </li>
                  ))}
              </ul>
        </div>
      );
    }
  }
