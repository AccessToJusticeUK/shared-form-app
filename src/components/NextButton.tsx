import * as React from 'react';
import { NextButtonProps } from './props.types';

export class NextButton extends React.Component<NextButtonProps, {}> {

    constructor(props: NextButtonProps) {
        super(props);
    }

    goToNextStep(event: {}): void {
      console.log("yayy");
    }

    render() {
        return (
            <div className="nextbutton" onClick={e => this.goToNextStep(e)}>
                <span className="nextbutton-text">{this.props.text}</span>
            </div>
        );
    }
}



// /ref={div => this.selectedAnswerDiv = div}
