import * as React from 'react';
import { QuestionAnswerSetProps } from './props.types';
import { Answer } from './Answer';
import { QuestionPanel } from './QuestionPanel';
import { NextButton } from './NextButton';

export class QuestionAnswerSet extends React.Component<QuestionAnswerSetProps, {activeAnswerText: string}> {
    constructor(props: QuestionAnswerSetProps) {
        super(props);
        this.state = {
          activeAnswerText: '',
        };
    }

    handleAnswerClick = (AnswerText: string ): void => {
      this.setState({
        activeAnswerText: AnswerText,
      });
    }

    render() {
        return (
            <QuestionPanel question={this.props.question}>
                {this.props.answers.options.map(option =>
                  <Answer
                    key={option.id}
                    {...option}
                    activeAnswerText={this.state.activeAnswerText}
                    onClickHandler={this.handleAnswerClick}
                  />)}
                {this.props.answers.defaultOption && (
                    <div>
                        <hr className="divider-dotted" />
                        <Answer
                          {...this.props.answers.defaultOption}
                          activeAnswerText={this.state.activeAnswerText}
                          onClickHandler={this.handleAnswerClick}
                        />
                    </div>
                )}
                <div>
                  {}
                  <NextButton
                    text="Next"
                    isVisible={(this.state.activeAnswerText !== '')}
                    onClickHandler={() => this.props.handleNextButtonClick && this.props.handleNextButtonClick(this.state.activeAnswerText)}
                  />
                </div>
            </QuestionPanel>
        );
    }
}
