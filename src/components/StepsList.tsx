import * as React from 'react';
import { Step } from './Step';
import { PagePreamble, PagePreambleSection } from './PagePreamble';
import { StepsListProps, StepProps } from './props.types';
import * as sortBy from 'sort-by';

export class StepsList extends React.Component<StepsListProps, { stepIndexToOpen: number } > {

    constructor(props: StepsListProps) {
        super(props);
        this.state = {
          stepIndexToOpen: 1
        };
    }

    moveToNextStep = (data: string): void => {
      this.setState((prevState) => (
        { stepIndexToOpen: prevState.stepIndexToOpen + 1 }
      ));
    }

    render() {
      const steps = this.props.steps;
      steps.sort(sortBy('stepOrder'));
      return (
        <div>
            <PagePreamble>
                <PagePreambleSection>
                    <p><span className="text-large">You may already have legal insurance that you did not know about!</span></p>
                    <p>This page will walk you through the most likely sources of LEI (Legal Expenses Insurance) that
                    are often bundled with your existing financial products.</p>
                    <p>Having funds to cover your legal expenses will ensure your problem gets priority and resolved quickly</p>
                </PagePreambleSection>
                <PagePreambleSection>
                    <p>Before you start it may be helpful to have any paperwork regarding your bank accounts, credit cards and insurance to hand.</p>
                </PagePreambleSection>
            </PagePreamble>
            <ul className="list-unstyled">
                {steps.map((step: StepProps) => (
                    <li key={step.stepOrder}>
                        <Step
                            {...step}
                            openNextStep={(data) => this.moveToNextStep(data)}
                            shouldBeOpen={this.state.stepIndexToOpen === step.stepOrder}
                        />
                    </li>
                ))}
            </ul>
        </div>);
    }
  }
