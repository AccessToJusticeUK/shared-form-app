import * as React from 'react';
import { Step } from '../components/Step';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { QuestionAnswerSet } from '../components/QuestionAnswerSet';
import { TabbedDirectory } from '../components/TabbedDirectory';
import { PagePreamble, PagePreambleSection } from '../components/PagePreamble';

const tabbedDirectoryCode = `<TabbedDirectory
    question="Who supplies your home insurance?"
    defaultTabId="a"
    results={[
        {
            name: 'AXA',
            directory_index: 'a'
        },
        {
            name: 'Admiral',
            directory_index: 'a'
        },
        {
            name: 'Badmiral'
            directory_index: 'b'
        }
    ]}
/>`;

const stepCode = `<Step
    stepId={1}
    stages={[]}
    shouldBeOpen={true}
    completeAtIndex={0}
    stepHeaderProps={{
        stepId: 1,
        title: 'Step',
        description: 'An example step'
    }}
    preambleProps={{
        innerHTML: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }}
/>`;

const questionAnswerCode = `<QuestionAnswerSet
    question='Which of the following options best describes your legal issue?'
    answers={{
        defaultOption: { id: '0', text: 'My issue is not listed above' },
        options: [
            { id: '1', text: 'Consumer disputes'},
            { id: '2', text: 'Criminal defence'},
            { id: '3', text: 'Employment disputes', example: 'e.g. redundancy or conflict in work' },
            { id: '4', text: 'Identity theft'},
            { id: '5', text: 'Neighbour disputes'},
            { id: '6', text: 'Personal injury'},
            { id: '7', text: 'Provision of an inadequate service'},
            { id: '8', text: 'Tax investigation'}
        ]
    }}
/>`;

const pagePreambleCode = `<PagePreamble>
    <PagePreambleSection>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    </PagePreambleSection>
    <PagePreambleSection>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage.</p>
    </PagePreambleSection>
</PagePreamble>`;

const buttonCode = `<Button classNames="button button-large" onClickHandler={(): void => undefined}>
    Some button content
</Button>`;

const iconCode = `<Icon text="Step complete" classNames="checkmark-icon" imgSrc={require('../styling/images/checkmark-icon.png')} />`;

export const DesignSystem: React.StatelessComponent<{}> = props => {
    return (
        <div className="design-system">
            <div className="design-system-panel">
                <h2>Step - built using Step Header and Preamble</h2>
                <pre>{stepCode}</pre>
                <Step
                    id={1}
                    stages={[]}
                    shouldBeOpen={true}
                    stepHeaderProps={{
                        stepId: 1,
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
                <div className="jumbotron">
                    <strong>Note:</strong> The <code>results</code> property passed into the Tabbed Directory must only have the
                    keys <code>name</code> and <code>directory_index</code> because of Typescript's strict typing.
                </div>
                <pre>{tabbedDirectoryCode}</pre>
                <div className="jumbotron">
                    <TabbedDirectory
                        question="Who supplies your home insurance?"
                        defaultTabId="a"
                        results={[
                            {
                                name: 'AXA',
                                directory_index: 'a'
                            },
                            {
                                name: 'Admiral',
                                directory_index: 'a'
                            },
                            {
                                name: 'Badmiral',
                                directory_index: 'b'
                            }
                        ]}
                    />
                </div>
            </div>
            <div className="design-system-panel">
                <h2>Page Preamble</h2>
                <pre>{pagePreambleCode}</pre>
                <PagePreamble>
                    <PagePreambleSection>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </PagePreambleSection>
                    <PagePreambleSection>
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage.</p>
                    </PagePreambleSection>
                </PagePreamble>
            </div>
            <div className="design-system-panel">
                <h2>Button</h2>
                <pre>
                    {buttonCode}
                </pre>
                <div className="jumbotron">
                    <Button classNames="button button-large" onClickHandler={(): void => undefined}>
                        Some button content
                    </Button>
                </div>
            </div>
            <div className="design-system-panel">
                <h2>Icon (with text)</h2>
                <pre>
                    {iconCode}
                </pre>
                <div className="jumbotron">
                    <Icon text="Step complete" classNames="checkmark-icon" imgSrc={require('../styling/images/checkmark-icon.png')} />
                </div>
            </div>
            <div className="design-system-panel">
                <h2>Question Answer Set</h2>
                <pre>
                    {questionAnswerCode}
                </pre>
                <div className="jumbotron">
                <QuestionAnswerSet
                    question="Which of the following options best describes your legal issue?"
                    answers={{
                        defaultOption: { id: '0', text: 'My issue is not listed above' },
                        options: [
                            { id: '1', text: 'Consumer disputes'},
                            { id: '2', text: 'Criminal defence'},
                            { id: '3', text: 'Employment disputes', example: 'e.g. redundancy or conflict in work' },
                            { id: '4', text: 'Identity theft'},
                            { id: '5', text: 'Neighbour disputes'},
                            { id: '6', text: 'Personal injury'},
                            { id: '7', text: 'Provision of an inadequate service'},
                            { id: '8', text: 'Tax investigation'}
                        ]
                    }}
                />
                </div>
            </div>
        </div>
    );
};
