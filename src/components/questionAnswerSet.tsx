import * as React from 'react';
import { Answer, QuestionAnswerSetProps } from './props.types';

export class QuestionAnswerSet extends React.Component<QuestionAnswerSetProps, {}> {
    constructor(props: QuestionAnswerSetProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="qas">
                    <div className="qas-question">{this.props.question}</div>
                    <div className="qas-answers">{this.props.answers.options.map((answer: Answer, index: number) =>
                        <div className="qas-answer" key={index}>
                            <div className="qas-answer-text">{answer.text}</div>
                            <div className="qas-answer-example">{answer.example}</div>
                        </div>)}
                        <hr className="default-option" />
                        <div className="qas-answer">
                            <div className="qas-answer-text">{this.props.answers.defaultOption.text}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
