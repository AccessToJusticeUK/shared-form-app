import * as React from 'react';
import { SectionProps } from './props.types';

export class Preamble extends React.Component<SectionProps, {}> {
    constructor(props: SectionProps) {
        super(props);
    }
    
    render() {
        return (
            <div>
                {this.props.isVisible === true &&
                    <div className="step-preamble">
                        {this.props.innerHTML}
                    </div>
                }
            </div>
        );
    }
}
