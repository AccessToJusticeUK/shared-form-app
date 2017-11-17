import * as React from 'react';
import { ButtonProps } from './props.types';
import { concatClassNames } from '../support/helpers/formatters';

export const Button: React.StatelessComponent<ButtonProps> = (props) => {
    return (
        <button className={concatClassNames('button', props.classNames)} onClick={props.onClickHandler}>
            {props.children}
        </button>
    );
};
