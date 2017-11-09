import * as React from 'react';
import { TabPanelProps } from '../props.types';

export const TabPanel: React.StatelessComponent<TabPanelProps> = (props) => {
    if (props.id === props.activeTabId) {
        return (
            <div className="tab-panel">
                {props.children}
            </div>
        );
    }

    return null;
};