import * as React from 'react';
import { QuestionAnswerSetProps } from './props.types';
import { Answer } from './Answer';

export class QuestionAnswerSet extends React.Component<QuestionAnswerSetProps, {}> {
    constructor(props: QuestionAnswerSetProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="qas">
                    <div className="qas-question">{this.props.question}</div>
                    {this.props.answers.options.map(option => <Answer key={option.id} {...option} />)}
                    {this.props.answers.defaultOption !== undefined &&
                        <div>
                            <hr className="default-option" />
                            <Answer {...this.props.answers.defaultOption} />
                        </div>
                    }
                </div>
            </div>
        );
    }
}
