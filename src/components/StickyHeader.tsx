import * as React from 'react';
import { StickyHeaderProps } from './props.types';

export const StickyHeader: React.StatelessComponent<StickyHeaderProps> = (props) => {
    return (
        <div className="sticky-header">
            <div className="sticky-header-left">
                <img className="sticky-header-logo" src={props.logoSrc} alt="logo" />
            </div>
            <div className="sticky-header-right">
                <h1 className="sticky-header-title">{props.title}</h1>
            </div>
        </div>
    );
};