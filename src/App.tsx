import * as React from 'react';
import { mockedData } from './data/mockedSteps';
import { StepsList } from './components/StepsList';

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <StepsList steps={mockedData.steps} />
        );
    }
}