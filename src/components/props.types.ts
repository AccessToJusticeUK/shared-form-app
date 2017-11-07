export interface StepProps {
    stepOrder: number;
    isVisible: boolean;    
    questionHeaderProps: StepHeaderProps;
    preambleProps: PreambleProps;
    questionAnswerSetProps: QuestionAnswerSetProps;
    tabsListProps?: TabsListProps;
};

export interface StepsListProps {
    steps: StepProps[];
};

export interface StepHeaderProps {
    title: string;
    stepOrder: number;
    description: string;
};

export interface PreambleProps {
    innerHTML: string;
};

export interface Answer {
    id: string;
    text: string;
    example: string;
};

export interface QuestionAnswerSetProps {
    question: string;
    answers: {
        options: Answer[],
        defaultOption?: Answer
    };
};

export interface QuestionPanelProps {
    question: string;
}

export interface TabProps {
    id: string;
    text: string;
    isActive: boolean;
    isDisabled: boolean;
};

export interface TabsListProps {
    question: string;
    tabs: TabProps[];
};
