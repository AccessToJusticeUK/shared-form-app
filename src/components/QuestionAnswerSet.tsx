import * as React from 'react';
import { QuestionAnswerSetProps } from './props.types';
import { Answer } from './Answer';
import { QuestionPanel } from './QuestionPanel';

export class QuestionAnswerSet extends React.Component<QuestionAnswerSetProps, {activeAnswerText: string}> {
    constructor(props: QuestionAnswerSetProps) {
        super(props);
        this.state = {
            activeAnswerText: ''
        };
    }

    selectAnswer = (text: string) => {
        this.setState({
            activeAnswerText: text
        });

        if (this.props.otherThing) {
            this.props.otherThing(text);
        }
    }

    render() {
        return (
            <QuestionPanel question={this.props.question}>
                {this.props.answers.options.map(option =>
                  <Answer
                    key={option.id}
                    {...option}
                    isSelected={option.text === this.state.activeAnswerText}
                    onClickHandler={this.selectAnswer}
                  />)}
                {this.props.answers.defaultOption && (
                    <div>
                        <hr className="divider-dotted" />
                        <Answer
                          {...this.props.answers.defaultOption}
                          isSelected={this.props.answers.defaultOption.text === this.state.activeAnswerText}
                          onClickHandler={this.props.otherThing}
                        />
                    </div>
                )}
            </QuestionPanel>
        );
    }
}
