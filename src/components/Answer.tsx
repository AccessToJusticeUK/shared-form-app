import * as React from 'react';
import * as classNames from 'classnames';
import { AnswerProps } from './props.types';

export const Answer: React.StatelessComponent<AnswerProps> = (props) => {
    const answerClasses = classNames({
        'answer button': true,
        'selected': props.isSelected,
    });

    const clickAnswer = (event: { preventDefault: () => void }): void => {
        event.preventDefault();
        if (props.onClickHandler) {
            props.onClickHandler(props.text);
        }
    };

    return (
      <button className={answerClasses} tabIndex={+props.id} onClick={clickAnswer}>
        {props.text}
        <div className="answer-example">{props.example}</div>
      </button>
    );

};
