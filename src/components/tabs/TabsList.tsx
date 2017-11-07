import * as React from 'react';
import { TabsListProps } from '../props.types';
import { QuestionPanel } from '../QuestionPanel';

export class TabsList extends React.Component<TabsListProps, {}> {
    constructor(props: TabsListProps) {
        super(props);
    }

    render() {
        return (
            <QuestionPanel question={this.props.question} />
        );
    }
}
