import * as React from "react";
import { Step } from "./components/step";

export class App extends React.Component {
    render() {
        return (
           <div>
              <Step title="Step 1 - " description="What type of issue do you have?" />
              <Step title="Step 2 - " description="What type of issue do you have?" />
              <Step title="Step 3 - " description="What type of issue do you have?" />
           </div>
        );
    }
}
