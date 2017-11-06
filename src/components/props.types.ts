export interface StepProps {
    stepOrder: number;
    questionHeaderProps: StepHeaderProps;
    sectionProps: SectionProps;
    questionAnswerSetProps: QuestionAnswerSetProps;
};

export interface StepsListProps {
    steps: StepProps[];
};

export interface StepHeaderProps {
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
