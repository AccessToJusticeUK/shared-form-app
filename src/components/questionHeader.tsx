import * as React from 'react';
import { QuestionHeaderProps } from './props.types';

export class QuestionHeader extends React.Component<QuestionHeaderProps, {}> {
    constructor(props: QuestionHeaderProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>
                    <span id="step">{this.props.title}{this.props.stepOrder}</span>
                    <span id="desc">{this.props.description}</span>
                </p>
            </div>
        );
    }
}
