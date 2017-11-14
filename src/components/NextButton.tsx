import * as React from 'react';
import * as classNames from 'classnames';
import { NextButtonProps } from './props.types';

export const NextButton: React.StatelessComponent<NextButtonProps> = (props) => {

    const nextButtonClasses = classNames({
        'nextbutton': true,
        'hidden': !props.isVisible,
    });

    return (
        <div className={nextButtonClasses} onClick={props.onClickHandler}>
            <span className="nextbutton-text">{props.text}</span>
        </div>
    );
};
