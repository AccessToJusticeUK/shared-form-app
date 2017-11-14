import * as React from 'react';
import { ButtonProps } from './props.types';

export const Button: React.StatelessComponent<ButtonProps> = (props) => {
    return (
        <button className={props.classNames} onClick={props.onClickHandler}>
            {props.children}
        </button>
    );
};
