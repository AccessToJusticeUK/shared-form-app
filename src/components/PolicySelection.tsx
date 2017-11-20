import * as React from 'react';
import { PolicySelectionProps } from './props.types';
import { Button } from './Button';
import * as classNames from 'classnames';

export const PolicySelection: React.StatelessComponent<PolicySelectionProps> = (props) => {
    const buttonClassNames = classNames({
        'button-large': true,
        'hidden': false,
        'policy-selection': true
    });

    return (
        <div className="policy-selection">

        POLICY OPTION 1
        <br/>
        POLICY OPTION 2

            <div className="question"> Add another insurance policy? It is best to list all you have </div>
                <div className="form-actions container--question-width">
                    <Button
                        classNames={buttonClassNames}
                        onClickHandler={props.addAPolicyClicked}
                    >
                    Add a Policy
                    </Button>
                    <br/>
                </div>
            <div className="container--question-width">
                <hr className="divider-dotted" />
            </div>
        </div>
    );
};
