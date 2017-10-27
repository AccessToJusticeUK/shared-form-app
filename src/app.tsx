import * as React from "react";
import { Step, IStepProps } from "./components/step";

    let stepProps : IStepProps;

    stepProps = {
        questionHeaderProps: {
            title: "Step 1 - ",
            description: "Question"
        },
    
        sectionProps: {
            isVisible: true,
            innerHTML: "Section"
        }
    }

export class App extends React.Component {
    render() {
        return (
           <div>
              <Step {...stepProps} />
           </div>
        );
    }
}
