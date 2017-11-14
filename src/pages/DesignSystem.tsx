import * as React from 'react';
import { Step } from '../components/Step';
import { TabbedDirectory } from '../components/TabbedDirectory';

const tabbedDirectoryCode = `<TabbedDirectory
    question="Who supplies your home insurance?"
    defaultTabId="a"
    results={{
        a: [ 'AXA', 'Admiral' ],
        b: [ 'BAXA', 'Badmiral' ],
        c: [ 'CAXA', 'Cadmiral' ],
        d: [],
        e: []
    }}
/>`;

const stepCode = `<Step
    stepOrder={1}
    shouldBeOpen={true}
    stepHeaderProps={{
        stepOrder: 1,
        title: 'Step',
        description: 'An example step'
    }}
    preambleProps={{
        innerHTML: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }}
/>`;

export const DesignSystem: React.StatelessComponent<{}> = props => {
    return (
        <div className="design-system">
            <div className="design-system-panel">
                <h2>Step - built using Step Header and Preamble</h2>
                <pre>{stepCode}</pre>
                <Step
                    stepOrder={1}
                    shouldBeOpen={true}
                    stepHeaderProps={{
                        stepOrder: 1,
                        title: 'Step',
                        description: 'An example step'
                    }}
                    preambleProps={{
                        innerHTML: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    }}
                />
            </div>
            <div className="design-system-panel">
                <h2>Tabbed Directory - built using Tabs, TabPanel and TabsHeader</h2>
                <pre>{tabbedDirectoryCode}</pre>
                <div className="jumbotron">
                    <TabbedDirectory
                        question="Who supplies your home insurance?"
                        defaultTabId="a"
                        results={{
                            a: [ 'AXA', 'Admiral' ],
                            b: [ 'BAXA', 'Badmiral' ],
                            c: [ 'CAXA', 'Cadmiral' ],
                            d: [],
                            e: []
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
