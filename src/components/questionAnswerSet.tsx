import * as React from 'react';
import { QuestionAnswerSetProps } from './props.types';

export class QuestionAnswerSet extends React.Component<QuestionAnswerSetProps, {}> {
    constructor(props: QuestionAnswerSetProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="qas">
                    <div className="qas-question">{this.props.question}</div>
                    <div className="qas-answers">{this.props.answers.map((answer: string, index: number) =>
                        <div className="qas-answer" key={index}>
                            <div className="qas-answer-text">{answer}</div>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}
