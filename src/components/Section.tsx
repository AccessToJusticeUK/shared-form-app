import * as React from "react";

export interface SectionProps 
{ 
    compiler: string; 
    framework: string; 
}

export class Section extends React.Component<SectionProps, {}> {
    render() {
        return (
            <h1>
                Hello from {this.props.compiler} and {this.props.framework}!
            </h1>
        );
    }
}