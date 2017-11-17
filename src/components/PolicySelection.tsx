import * as React from 'react';
import { PolicySelectionProps } from './props.types';
import { Button } from './Button';
import * as classNames from 'classnames';

export const PolicySelection: React.StatelessComponent<PolicySelectionProps> = (props) => {
    const nextButtonClassNames = classNames({
        'next-button button-large': true,
        'hidden': false,
    });
    return (
        <div>
        THIS IS A POLICY SELECTION 
            <div className="form-actions">
                <Button
                    classNames={nextButtonClassNames}
                    onClickHandler={props.addAPolicyClicked}
                >
                Add a Policy
                </Button>
            </div>
        </div>
    );
};
