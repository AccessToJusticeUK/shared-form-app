import * as React from "react";

export interface ISectionProps {
    isVisible : boolean,
    innerHTML : string
}

interface IStyle {
    display? : string
}

export function Section(props: ISectionProps) {
    function getStyle(props: ISectionProps): {}  {
        let style : IStyle = {};
        if (!props.isVisible) {
            style.display = "none";
        }
        return style;
    }
    
    return (
        <div style={getStyle(props)}>
            {props.innerHTML}
        </div>
    );
    
};