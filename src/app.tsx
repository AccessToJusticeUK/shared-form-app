import * as React from "react";
import { Step } from "./components/Step";

export class App extends React.Component {
    render() {
        return (
           <div>
              <Step title="Title1" />
              <Step title="Title2" />
              <Step title="Title3" />
           </div> 
        );
    }
}