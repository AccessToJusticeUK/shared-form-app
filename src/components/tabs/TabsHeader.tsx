import * as React from 'react';
import { QuestionPanel } from '../QuestionPanel';
import { TabsHeaderProps } from '../props.types';

export const TabsHeader: React.StatelessComponent<TabsHeaderProps> = props => {
    return (
        <div>
            <QuestionPanel question={props.question}>
                <div className="tabs-list-container">
                    <ul className="nav nav-tabs tabs-list">
                        {props.children}
                    </ul>
                </div>
            </QuestionPanel>
        </div>
    );
};
