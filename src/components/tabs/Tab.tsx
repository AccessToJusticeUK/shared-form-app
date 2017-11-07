import * as React from 'react';
import { TabProps } from '../props.types';

export class Tab extends React.Component<TabProps, {}> {
    constructor(props: TabProps) {
        super(props);
    }

    getTabClasses(isActive: boolean, isDisabled: boolean): string {
        const navItemClass = 'nav-item';

        if (isDisabled) return `${navItemClass} disabled`;
        if (isActive) return `${navItemClass} active`;
        return navItemClass
    }

    render() {
        return (
            <li key={this.props.id} className={this.getTabClasses(this.props.isActive, this.props.isDisabled)}>
                <a href={`#${this.props.id}`}>
                    {this.props.text}
                </a>
            </li>
        );
    }
}
