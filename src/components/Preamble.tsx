import * as React from 'react';
import { PreambleProps } from './props.types';

export class Preamble extends React.Component<PreambleProps, {}> {
    constructor(props: PreambleProps) {
        super(props);
    }

    render() {
        return (
            <div className="preamble">
                {this.props.innerHTML}
            </div>
        );
    }
}
