import * as React from 'react';
import { QuestionHeader, QuestionHeaderProps } from './questionHeader';
import { Section, SectionProps } from './section';
import { QuestionAnswerSet, QuestionAnswerSetProps } from './questionAnswerSet';

export interface StepProps {
    questionHeaderProps: QuestionHeaderProps;
    sectionProps: SectionProps;
    questionAnswerSetProps: QuestionAnswerSetProps;
}

export function Step(props: StepProps) {
    return (
        <div className="jumbotron">
            <QuestionHeader {...props.questionHeaderProps} />
            <Section {...props.sectionProps} />
            <QuestionAnswerSet {...props.questionAnswerSetProps} />
        </div>
    );
}
