import * as React from 'react';
import { Step } from './Step';
import * as sortBy from 'sort-by';
import { StepsListProps, StepProps } from './props.types';

export class StepsList extends React.Component<StepsListProps, { openAtIndex: number} > {

    constructor(props: StepsListProps) {
        super(props);
        this.state = {
          openAtIndex: 1
        };
    }

    moveToNextStep = (data: string, step: StepProps): void => {
      this.setState((prevState) => (
        {openAtIndex: prevState.openAtIndex + 1 }
      ));
    }

    render() {
      const steps = this.props.steps;
      steps.sort(sortBy('stepOrder'));
      return (
          <div>
              <ul className="list-unstyled">
                  {steps.map((step: StepProps) => (
                     <li key={step.stepOrder}>
                          <Step
                            {...step}
                            openNextStep={(data) => this.moveToNextStep(data,step)}
                            shouldBeOpen={this.state.openAtIndex === step.stepOrder}
                          />
                     </li>
                  ))}
              </ul>
        </div>
      );
    }
  }
