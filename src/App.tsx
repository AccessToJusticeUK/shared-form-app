import * as React from 'react';
import * as classNames from 'classnames';
import { mockedData } from './data/mockedSteps';
import { NavigableStepsList } from './components/NavigableStepsList';
import { Home } from './pages/Home';
import { DesignSystem } from './pages/DesignSystem';
import { AppState } from './state.types';
import { PagePreamble, PagePreambleSection } from './components/PagePreamble';

const EXAMPLES_PAGE = 'examples';
const DESIGN_SYSTEM_PAGE = 'designSystem';

export class App extends React.Component<{}, AppState> {
    constructor() {
        super({});
        this.state = {
            activePage: EXAMPLES_PAGE
        };
    }

    clickPageTab(event: { preventDefault: () => void }, activePage: string): void {
        event.preventDefault();
        this.setState({ activePage });
    }

    getItemClasses(forPage: string): string {
        return classNames({
            'page-nav-item': true,
            'active': this.state.activePage === forPage
        });
    }

    render() {
        return (
            <div className="app">
                <Home logoSrc={require('./styling/images/logo.png')} title="Do I have Legal Expense Insurance?">
                    <ul className="nav nav-tabs nav-justified page-nav">
                        <li className={this.getItemClasses(EXAMPLES_PAGE)}>
                            <a onClick={event => this.clickPageTab(event, EXAMPLES_PAGE)}>
                                Examples
                            </a>
                        </li>
                        <li className={this.getItemClasses(DESIGN_SYSTEM_PAGE)}>
                            <a onClick={event => this.clickPageTab(event, DESIGN_SYSTEM_PAGE)}>
                                Design System
                            </a>
                        </li>
                    </ul>
                    {
                        this.state.activePage === EXAMPLES_PAGE &&
                        <div>
                            <PagePreamble>
                                <PagePreambleSection>
                                    <p><span className="text-large">You may already have legal insurance that you did not know about!</span></p>
                                    <p>This page will walk you through the most likely sources of LEI (Legal Expenses Insurance) that
                                    are often bundled with your existing financial products.</p>
                                    <p>Having funds to cover your legal expenses will ensure your problem gets priority and resolved quickly.</p>
                                </PagePreambleSection>
                                <PagePreambleSection>
                                    <p>Before you start it may be helpful to have any paperwork regarding your bank accounts,
                                        credit cards and insurance to hand.</p>
                                </PagePreambleSection>
                            </PagePreamble>
                            <NavigableStepsList steps={mockedData.steps} />
                        </div>
                    }
                    {
                        this.state.activePage === DESIGN_SYSTEM_PAGE &&
                        <DesignSystem />
                    }
                </Home>
            </div>
        );
    }
}
