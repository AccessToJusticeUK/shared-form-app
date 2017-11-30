import * as React from 'react';

export const PagePreambleSection: React.StatelessComponent<{}> = (props) => {
    return (
        <div className="page-preamble-section">
            {props.children}
        </div>
    );
};
