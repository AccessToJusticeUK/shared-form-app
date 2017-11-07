import * as React from 'react';
import { TabsListProps, TabProps } from '../props.types';
import { QuestionPanel } from '../QuestionPanel';
import { Tab } from './Tab';

export class TabsList extends React.Component<TabsListProps, {}> {
    constructor(props: TabsListProps) {
        super(props);
    }

    render() {
        return (
            <div className='tabs-list-container'>
                <QuestionPanel question={this.props.question}>
                    <ul className='nav nav-tabs tabs-list'>
                        { this.props.tabs &&
                            Array.from(this.props.tabs).map((tab: TabProps) => (
                                <Tab key={tab.id} {...tab} />
                            ))
                        }
                    </ul>
                </QuestionPanel>
            </div>
        );
    }
}
