import * as React from 'react';
import { QuestionPanelProps } from './props.types';

export class QuestionPanel extends React.Component<QuestionPanelProps, {}> {
    constructor(props: QuestionPanelProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="qas">
                    <div className="qas-question">{this.props.question}</div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
