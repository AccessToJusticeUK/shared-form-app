import * as React from "react";

interface SectionProps {
  isVisible : boolean,
  innerHTML : string
}

export class Section extends React.Component<SectionProps, SectionProps> {
  render() :any {
    return (
      <div>
        <Section {...this.props}/>
      </div>
    );
  }
}
