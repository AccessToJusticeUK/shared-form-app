import * as React from 'react';
import { QuestionPanelProps } from './props.types';

export class QuestionPanel extends React.Component<QuestionPanelProps, {}> {
    constructor(props: QuestionPanelProps) {
        super(props);
    }

    render() {
        return (
            <div className="question-panel">
                <div className="question"><h3>{this.props.question}</h3></div>
                {this.props.children}
            </div>
        );
    }
}
