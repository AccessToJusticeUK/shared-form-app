import * as React from 'react';
import { TabbedDirectoryProps } from './props.types';
import { TabbedDirectoryState } from './state.types';
import { Tab } from './tabs/Tab';
import { TabPanel } from './tabs/TabPanel';
import { TabsHeader } from './tabs/TabsHeader';
import { QuestionAnswerSet } from './QuestionAnswerSet';
import { formatDirectoryTab } from '../support/helpers/formatters';
import { TABBED_DIRECTORY_INDEXES } from '../support/constants';

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

    getTabPanel = (results: TabbedDirectoryProps['results'], directoryIndex: string): JSX.Element => {
        const panelContent = (): JSX.Element => {
            if (results.length === 0) {
                return (<div></div>)
            }

            const options = results.map((result) => ({
                id: result.directory_index,
                text: result.name
            }));

            return (
                <QuestionAnswerSet
                    onSelectAnswer={this.props.onSelectAnswer}
                    answers={{options}}
                />
            );
        };

        return (
            <TabPanel
                key={directoryIndex}
                id={directoryIndex}
                activeTabId={this.state.activeTabId}
                panelContentFactory={panelContent}
            />
        );
    }

    filterResultsByDirectoryIndex = (results: TabbedDirectoryProps['results'], directoryIndex: string): TabbedDirectoryProps['results'] => {
        const filterByDirectoryIndex = (result: {directory_index: string}): boolean => (
            result.directory_index === directoryIndex
        );
        return results.filter(filterByDirectoryIndex);
    }

    shouldDisableTab = (results: TabbedDirectoryProps['results'], directoryIndex: string): boolean => {
        const filteredResults = this.filterResultsByDirectoryIndex(results, directoryIndex);
        if (filteredResults.length > 0) {
            return false;
        }
        return true;
    }

    render() {
        const { results } = this.props;

        if (results.length === 0) {
            return (<div className="empty-message">No results found</div>);
        }

        return (
            <div>
                <TabsHeader question={this.props.question}>
                    { TABBED_DIRECTORY_INDEXES.map((directoryIndex) => (
                        <Tab
                            key={directoryIndex}
                            id={directoryIndex}
                            text={formatDirectoryTab(directoryIndex)}
                            onClickHandler={this.handleTabClick}
                            activeTabId={this.state.activeTabId}
                            isDisabled={this.shouldDisableTab(results, directoryIndex)}
                        />
                    ))}
                </TabsHeader>

                { results && TABBED_DIRECTORY_INDEXES.map((directoryIndex) => (
                    this.getTabPanel(this.filterResultsByDirectoryIndex(results, directoryIndex), directoryIndex)
                ))}
            </div>
        );
    }
}
