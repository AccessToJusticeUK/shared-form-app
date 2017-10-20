import * as React from "react";

interface QuestionHeaderProps {
    title: string
    description: string
}

 export function QuestionHeader(props: QuestionHeaderProps) {
    return (
        <div className="questionHeader" id="u158">
          <span id="step">{props.title}</span>
          <span id="desc">{props.description}</span>
        </div>
    );
}
