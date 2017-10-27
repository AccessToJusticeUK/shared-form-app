import * as React from "react";

export interface IQuestionHeaderProps {
    title: string,
    description: string
}

 export function QuestionHeader(props: IQuestionHeaderProps) {
    return (
        <div>
            <p>
                <span id="step">{props.title}</span>
                <span id="desc">{props.description}</span>
            </p>
        </div>
    );
}
