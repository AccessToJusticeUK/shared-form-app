import * as React from "react";

interface QuestionHeaderProps {
    title: string
}

export function QuestionHeader(props: QuestionHeaderProps) {
    return (
        <div className="questionHeader">
            {props.title}
        </div> 
    );   
}