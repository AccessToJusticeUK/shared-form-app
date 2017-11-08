import * as React from 'react';
import { QuestionAnswerSetProps } from './props.types';
import { Answer } from './Answer';
import { QuestionPanel } from './QuestionPanel';

export class QuestionAnswerSet extends React.Component<QuestionAnswerSetProps, {}> {
    constructor(props: QuestionAnswerSetProps) {
        super(props);
    }

    render() {
        return (
            <QuestionPanel question={this.props.question}>
                {this.props.answers.options.map(option => <Answer key={option.id} {...option} />)}
                {this.props.answers.defaultOption !== undefined && (
                    <div>
                        <hr className="default-option" />
                        <Answer {...this.props.answers.defaultOption} />
                    </div>
                )}
            </QuestionPanel>
        );
    }
}
