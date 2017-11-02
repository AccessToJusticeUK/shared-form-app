import * as React from 'react';

export interface QuestionAnswerSetProps {
    question: string;
    answers: string[];
}

export function QuestionAnswerSet(props: QuestionAnswerSetProps) {
    return (
        <div>
            <div className="qas">
                <div className="qas-question">{props.question}</div>
                <div className="qas-answers">{props.answers.map((answer, index) =>
                    <div className="qas-answer" key={index}>
                        <div className="qas-answer-text">{answer}</div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}
