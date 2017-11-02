import * as React from 'react';

export interface QuestionAnswerSetProps {
    question: string;
}

export function QuestionAnswerSet(props: QuestionAnswerSetProps) {
    return (
        <div>
            <p>
                <span id="qas-question">{props.question}</span>
            </p>
        </div>
    );
}
