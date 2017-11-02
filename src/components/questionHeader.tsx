import * as React from 'react';

export interface QuestionHeaderProps {
    title: string,
    stepOrder: number,
    description: string
}

export function QuestionHeader(props: QuestionHeaderProps) {
    return (
        <div>
            <p>
                <span id="step">{props.title}{props.stepOrder}</span>
                <span id="desc">{props.description}</span>
            </p>
        </div>
    );
}
