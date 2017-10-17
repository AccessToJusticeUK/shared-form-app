import * as React from "react";
import { QuestionHeader } from "./questionHeader";

interface StepProps {
    title: string
}

export class Step extends React.Component<StepProps, StepProps> {
    render() {
        return (
            <div>
                <QuestionHeader {...this.props}/>
            </div> 
        );
    }
}