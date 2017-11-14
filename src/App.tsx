import * as React from 'react';
import { mockedData } from './data/mockedSteps';
import { StepsList } from './components/StepsList';
import { DesignSystem } from './pages/DesignSystem';
import { AppState } from './state.types';
import * as classNames from 'classnames';

const EXAMPLES_PAGE = 'examples';
const DESIGN_SYSTEM_PAGE = 'designSystem';

export class App extends React.Component<{}, AppState> {
    constructor() {
        super();
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
            <div>
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
                    <StepsList steps={mockedData.steps} />
                }
                {
                    this.state.activePage === DESIGN_SYSTEM_PAGE &&
                    <DesignSystem />
                }
            </div>
        );
    }
}
