import * as React from 'react';
import { TabsHeaderProps } from '../props.types';
import { QuestionPanel } from '../QuestionPanel';

export const TabsHeader: React.StatelessComponent<TabsHeaderProps> = props => {
    return (
        <div className="tabs-list-container">
            <QuestionPanel question={props.question}>
                <ul className="nav nav-tabs tabs-list">
                    {props.children}
                </ul>
            </QuestionPanel>
        </div>
    );
};
