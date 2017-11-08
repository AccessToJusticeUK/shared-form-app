import * as React from 'react';
import { TabsListProps, TabProps } from '../props.types';
import { TabsListState } from '../state.types';
import { QuestionPanel } from '../QuestionPanel';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';
import { Answer } from '../Answer';

export class TabsList extends React.Component<TabsListProps, TabsListState> {
    constructor(props: TabsListProps) {
        super(props);
        this.state = {
            activeTabId: this.props.defaultTabId
        };
    }

    handleTabClick = (tabId: string): void => {
        this.setState({
            activeTabId: tabId
        });
    }

    render() {
        // TODO: Figure out how to pass in TabPanels content below in mockData instead of hardcoding

        return (
            <div>
                <div className="tabs-list-container">
                    <QuestionPanel question={this.props.question}>
                        <ul className="nav nav-tabs tabs-list">
                            { this.props.tabs &&
                                Array.from(this.props.tabs).map((tab: TabProps) => (
                                    <Tab {...tab} key={tab.id} onClickHandler={this.handleTabClick} activeTabId={this.state.activeTabId} />
                                ))
                            }
                        </ul>
                    </QuestionPanel>
                </div>

                <TabPanel id="a" activeTabId={this.state.activeTabId}>
                    <Answer id="1" text="AA" example="" />
                    <Answer id="2" text="Admiral" example="" />
                    <Answer id="3" text="AXA" example="" />
                </TabPanel>

                <TabPanel id="b" activeTabId={this.state.activeTabId}>
                    <Answer id="1" text="BB" example="" />
                    <Answer id="2" text="Badmiral" example="" />
                    <Answer id="3" text="BAXA" example="" />
                </TabPanel>
            </div>
        );
    }
}
