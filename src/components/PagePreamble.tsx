import * as React from 'react';

export const PagePreamble: React.StatelessComponent<{}> = (props) => {
    return (
        <div className="page-preamble">
            {props.children}
        </div>
    );
};
