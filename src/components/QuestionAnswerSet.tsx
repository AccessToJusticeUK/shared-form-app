import * as React from 'react';
import * as classNames from 'classnames';
import { QuestionAnswerSetProps } from './props.types';
import { QuestionAnswerSetState } from './state.types';
import { Answer } from './Answer';
import { QuestionPanel } from './QuestionPanel';
import { Button } from './Button';

export class QuestionAnswerSet extends React.Component<QuestionAnswerSetProps, QuestionAnswerSetState> {
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
        const nextButtonClassNames = classNames({
            'next-button button-large': true,
            'hidden': this.state.activeAnswerText === ''
        });

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
                <div className="form-actions">
                  <Button
                    classNames={nextButtonClassNames}
                    onClickHandler={() => this.props.handleNextButtonClick && this.props.handleNextButtonClick(this.state.activeAnswerText)}
                  >
                    Next
                  </Button>
                </div>
            </QuestionPanel>
        );
    }
}
