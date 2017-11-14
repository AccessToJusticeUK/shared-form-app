import * as React from 'react';
import { Step } from '../components/Step';
import { TabbedDirectory } from '../components/TabbedDirectory';
import { PagePreamble, PagePreambleSection } from '../components/PagePreamble';

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

const pagePreambleCode = `<PagePreamble>
    <PagePreambleSection>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </PagePreambleSection>
    <PagePreambleSection>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </PagePreambleSection>
</PagePreamble>`;

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
            <div className="design-system-panel">
                <h2>Page Preamble</h2>
                <pre>{pagePreambleCode}</pre>
                <PagePreamble>
                    <PagePreambleSection>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </PagePreambleSection>
                    <PagePreambleSection>
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </PagePreambleSection>
                </PagePreamble>
            </div>
        </div>
    );
};
