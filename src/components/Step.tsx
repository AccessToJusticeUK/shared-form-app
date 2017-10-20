import * as React from "react";
import { QuestionHeader } from "./questionHeader";

interface StepProps {
    title: string
    description: string
}

export class Step extends React.Component<StepProps, StepProps> {
    render() {
        return (
            <div className="jumbotron">
                <QuestionHeader {...this.props}/>
            </div>
        );
    }
}
