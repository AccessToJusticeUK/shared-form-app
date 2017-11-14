import * as React from 'react';
import * as classNames from 'classnames';
import { AnswerProps } from './props.types';

export const Answer: React.StatelessComponent<AnswerProps> = (props) => {
    const answerClasses = classNames({
        'answer': true,
        'selected': props.activeAnswerText === props.text
    });

    const clickAnswer = (event: { preventDefault: () => void }): void => {
        event.preventDefault();
        if (props.onClickHandler) {
            props.onClickHandler(props.text);
        }
    };

    return (
      <div className={answerClasses} tabIndex={+props.id} onClick={clickAnswer}>
        <span className="answer-text">{props.text}</span>
        <span className="answer-example">{props.example}</span>
      </div>
    );

};
