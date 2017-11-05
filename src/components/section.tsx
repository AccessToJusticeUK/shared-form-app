import * as React from 'react';
import { SectionProps } from './props.types';

interface Style {
    display?: string;
}

function getStyle(props: SectionProps): {} {
    let style: Style = {};
    if (!props.isVisible) {
        style.display = 'none';
    }
    return style;
}

export class Section extends React.Component<SectionProps, {}> {
    constructor(props: SectionProps) {
        super(props);
    }
    
    render() {
        return (
            <div style={getStyle(this.props)}>
                {this.props.innerHTML}
            </div>
        );
    }
}
