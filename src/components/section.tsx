import * as React from "react";

export interface ISectionProps {
  isVisible : boolean,
  innerHTML : string
}

export class Section extends React.Component<ISectionProps, ISectionProps> {
  render() :any {
    return (
      <div>
        {this.props.innerHTML}
      </div>
    );
  }
}
