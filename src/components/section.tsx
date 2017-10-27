import * as React from "react";

export interface ISectionProps {
    isVisible : boolean,
    innerHTML : string
}

interface IStyle {
    display? : string
}

export class Section extends React.Component<ISectionProps, ISectionProps> {
    getStyle(props : ISectionProps) {
        let style : IStyle = {};

        if (!props.isVisible) {
            style.display = "none";
        }

        return style;
    }

    render() : any {
        return (
            <div style={this.getStyle(this.props)}>
                {this.props.innerHTML}
            </div>
        );
    }
}
;