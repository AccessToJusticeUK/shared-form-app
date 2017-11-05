export interface StepProps {
    stepOrder: number;
    questionHeaderProps: QuestionHeaderProps;
    sectionProps: SectionProps;
    questionAnswerSetProps: QuestionAnswerSetProps;
};

export interface StepsListProps {
    steps: StepProps[];
};

export interface QuestionHeaderProps {
    title: string;
    stepOrder: number;
    description: string;
};

export interface SectionProps {
    isVisible: boolean;
    innerHTML: string;
};

export interface Answer {
    id: string;
    text: string;
    example: string;
}

export interface QuestionAnswerSetProps {
    question: string;
    answers: {
        options: Answer[],
        defaultOption: Answer
    };
};
