import * as React from 'react';
import { QuestionAnswerSetProps } from './props.types';
import { Answer } from './Answer';
import { QuestionPanel } from './QuestionPanel';
import { NextButton } from './NextButton';

export class QuestionAnswerSet extends React.Component<QuestionAnswerSetProps, {activeAnswerId: string}> {
    constructor(props: QuestionAnswerSetProps) {
        super(props);
        this.state = {
          activeAnswerId: '',
        };
    }

    handleAnswerClick = (answerId: string ) :void => {
      this.setState({
        activeAnswerId: answerId,
      });
    }

    render() {
        return (
            <QuestionPanel question={this.props.question}>
                {this.props.answers.options.map(option => <Answer key={option.id} {...option} activeAnswerId={this.state.activeAnswerId} onClickHandler={this.handleAnswerClick}/>)}
                {this.props.answers.defaultOption && (
                    <div>
                        <hr className="divider-dotted" />
                        <Answer {...this.props.answers.defaultOption} activeAnswerId={this.state.activeAnswerId} onClickHandler={this.handleAnswerClick} />
                    </div>
                )}
                <div>
                  {}
                  <NextButton text="Next" isVisible={ true }/>
                </div>
            </QuestionPanel>
        );
    }
}
