import * as React from 'react';
import { AnswerProps } from './props.types';

export class Answer extends React.Component<AnswerProps, {}> {
    private selectedAnswerDiv: HTMLDivElement | null;

    constructor(props: AnswerProps) {
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
            <div className="answer" tabIndex={+this.props.id} ref={div => this.selectedAnswerDiv = div} onClick={e => this.selectAnswer(e)}>
                <span className="answer-text">{this.props.text}</span>
                <span className="answer-example">{this.props.example}</span>
            </div>
        );
    }
}