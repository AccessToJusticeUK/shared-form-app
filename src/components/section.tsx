import * as React from 'react';

export interface SectionProps {
    isVisible: boolean;
    innerHTML: string;
}

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

export function Section(props: SectionProps) {
    return (
        <div style={getStyle(props)}>
            {props.innerHTML}
        </div>
    );
}