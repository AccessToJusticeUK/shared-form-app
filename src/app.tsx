import * as React from "react";
import { Step } from "./components/step";
import { step1, step2, step3, step4, step5 } from "./data/mockedSteps";

export class App extends React.Component {
    render() {
        return (
           <div>
              <Step {...step1} />
              <Step {...step2} />
              <Step {...step3} />
              <Step {...step4} />
              <Step {...step5} />
           </div>
        );
    }
}
