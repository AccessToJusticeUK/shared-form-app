import * as React from "react";
import { Step, StepProps } from "./step";
import * as sortBy from 'sort-by';
//const sortBy = require('sort-by'); // TODO why doesn't es6 import work here?

export interface StepsListProps {
    steps: any[]
}

export function StepsList(props:StepsListProps) {
    const steps = props.steps;
    steps.sort(sortBy('stepOrder'));
    return (
        <div>
            <ul className="list-unstyled">
                {steps.map((step: StepProps ) => 
                    <li key={step.stepOrder}>
                        <Step {...step}/>
                    </li>    
                )}
            </ul>
         </div>
    )
}
