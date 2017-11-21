import * as React from 'react';
import { StepsListProps, StepProps } from './props.types';
import * as sortBy from 'sort-by';
import { NavigableStep } from './NavigableStep';

export class StepsList extends React.Component<StepsListProps, {} > {
    render() {
      const steps = this.props.steps;
      steps.sort(sortBy('id'));
      return (
            <ul className="list-unstyled">
                {steps.map((step: StepProps) => (
                    <li key={step.id}>
                        <NavigableStep
                            {...step}
                            stagesLength={step.stages.length}
                            moveToNext={() => this.props.moveToNext && this.props.moveToNext(step.id)}
                            shouldBeOpen={this.props.nextToComplete === step.id}
                            lastStepCompleted={this.props.lastStepCompleted}
                        />
                    </li>
                ))}
            </ul>
      );
    }
  }
