import * as React from 'react';

export const PagePreamble: React.StatelessComponent<{}> = (props) => {
    return (
        <div className="page-preamble">
            {props.children}
        </div>
    );
};

export const PagePreambleSection: React.StatelessComponent<{}> = (props) => {
    return (
        <div className="page-preamble-section">
            {props.children}
        </div>
    );
};