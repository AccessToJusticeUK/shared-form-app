import * as React from 'react';
import { PreambleProps } from './props.types';

export const Preamble: React.StatelessComponent<PreambleProps> = (props) => {
    return (
        <div className="preamble">
            {props.innerHTML}
        </div>
    );
};