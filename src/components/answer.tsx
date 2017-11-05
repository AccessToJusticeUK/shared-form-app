import * as React from 'react';
import { Answer as AnswerType } from './props.types';

export class Answer extends React.Component<AnswerType, {}> {
    private selectedAnswerDiv: HTMLDivElement | null;

    constructor(props: AnswerType) {
        super(props);
    }

    selectAnswer(event: {}): void {
        if (this.selectedAnswerDiv === null) {
            return;
        }

        const answersGroup = this.selectedAnswerDiv.parentElement;
        if (answersGroup === null) {
            return;
        }

        Array.from(answersGroup.children).map(answer => answer.classList.remove('selected'));

        this.selectedAnswerDiv.classList.add('selected');
    }

    render() {
        return (
            <div className="qas-answer" ref={answerDiv => this.selectedAnswerDiv = answerDiv} onClick={e => this.selectAnswer(e)}>
                <div className="qas-answer-text">{this.props.text}</div>
                <div className="qas-answer-example">{this.props.example}</div>
            </div>
        );
    }
}