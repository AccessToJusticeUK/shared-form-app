import * as React from 'react';
import { TabsListProps, TabProps } from '../props.types';
import { TabsListState } from '../state.types';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';
import { Answer } from '../Answer';
import { TabsHeader } from './TabsHeader';

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
                <TabsHeader question={this.props.question}>
                    { this.props.tabs &&
                        Array.from(this.props.tabs).map((tab: TabProps) => (
                            <Tab {...tab} key={tab.id} onClickHandler={this.handleTabClick} activeTabId={this.state.activeTabId} />
                        ))
                    }
                </TabsHeader>

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
