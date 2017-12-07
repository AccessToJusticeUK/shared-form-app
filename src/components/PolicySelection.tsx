import * as React from 'react';
import { PolicySelectionProps, SimpleProps } from './props.types';
import { Button } from './Button';
import * as classNames from 'classnames';

export const PolicySelection: React.StatelessComponent<PolicySelectionProps> = (props: PolicySelectionProps) => {
    const buttonClassNames = classNames({
        'button-large': true,
        'hidden': false,
    });

    const policyClassNames = classNames({
        'policy-selection': true,
        'answer-width': true
    });

    // console.log("policy props: " + props)
    // console.log("policy props policies: " + props.policies)

    return (
        <div>
            <div>
                {
                    props.policies.map((policyText: string) => (
                        <Simple
                            key={props.policies.indexOf(policyText)}
                            classNames={policyClassNames}
                            text={policyText}
                        />
                    ))
                }
            </div>
            <br />
            POLICY OPTION 2

            <div className="question"> Add another insurance policy? It is best to list all you have </div>
            <div className="form-actions container--question-width">
                <Button
                    classNames={buttonClassNames}
                    onClickHandler={props.addAPolicyClicked}
                >
                    Add another Policy
                </Button>
                <br />
            </div>
            <div className="container--question-width">
                <hr className="divider-dotted" />
                <div className="question"> When you have added in all your insurance policies proceed to the next step.</div>
            </div>
        </div>
    );
};

const Simple: React.StatelessComponent<SimpleProps> = (props: SimpleProps) => {
    return (
        <div className={props.classNames}>
            {props.text}
        </div>
    );
};
