import * as React from 'react';
import { TabbedDirectoryProps } from './props.types';
import { TabbedDirectoryState } from './state.types';
import { Tab } from './tabs/Tab';
import { TabPanel } from './tabs/TabPanel';
import { TabsHeader } from './tabs/TabsHeader';
import { Answer } from './Answer';
import { formatDirectoryTab } from '../helpers/formatters';

export class TabbedDirectory extends React.Component<TabbedDirectoryProps, TabbedDirectoryState> {
    constructor(props: TabbedDirectoryProps) {
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

    shouldDisableTab = (resultArr: Array<string>): boolean => {
        if (!resultArr || resultArr.length === 0) {
            return true;
        }
        return false;
    }

    getTabPanel = (key: string, entries: Array<string>) => {
        const panelContent = () => {
            return (
                <div key={key} className="question-panel">
                    { entries.map((entry, index) => (
                        <Answer key={index} id={index.toString()} text={entry} />
                    ))}
                </div>
            );
        };

        return (
            <TabPanel
                key={key}
                id={key}
                activeTabId={this.state.activeTabId}
                panelContentFactory={panelContent}
            />
        );
    }

    render() {
        const { results } = this.props;
        const resultsKeys = Object.keys(results);

        return (
            <div>
                <TabsHeader question={this.props.question}>
                    { results && resultsKeys.map((resultKey) => (
                        <Tab
                            key={resultKey}
                            id={resultKey}
                            text={formatDirectoryTab(resultKey)}
                            onClickHandler={this.handleTabClick}
                            activeTabId={this.state.activeTabId}
                            isDisabled={this.shouldDisableTab(results[resultKey])}
                        />
                    ))}
                </TabsHeader>

                { results && resultsKeys.map((resultKey) => (
                    this.getTabPanel(resultKey, results[resultKey])
                ))}
            </div>
        );
    }
}
