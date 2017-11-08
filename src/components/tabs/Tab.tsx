import * as React from 'react';
import { TabProps } from '../props.types';
import * as classNames from 'classnames';

export const Tab: React.StatelessComponent<TabProps> = (props) => {
    const clickTab = (event: { preventDefault: () => void }): void => {
        event.preventDefault();

        if (props.onClickHandler && !props.isDisabled) {
            props.onClickHandler(props.id);
        }
    };

    const tabClasses = classNames({
        'nav-item tab': true,
        'disabled': props.isDisabled,
        'active': !props.isDisabled && props.activeTabId === props.id
    });

    return (
        <li key={props.id} className={tabClasses}>
            <a className="tab-inner" onClick={clickTab}>
                {props.text}
            </a>
        </li>
    );
};