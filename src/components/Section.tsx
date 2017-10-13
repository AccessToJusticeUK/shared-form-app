import * as React from "react";

export interface SectionProps 
{ 
    compiler: string; 
    framework: string; 
}

export class Section extends React.Component<SectionProps, {}> {
    render() {
        return (
           <div>
               Section
           </div> 
        );
    }
}