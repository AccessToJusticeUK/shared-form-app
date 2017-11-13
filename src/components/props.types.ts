export interface StepProps {
    stepOrder: number;
    isVisible: boolean;
    questionHeaderProps: StepHeaderProps;
    preambleProps: PreambleProps;
    questionAnswerSetProps: QuestionAnswerSetProps;
    tabbedDirectoryProps?: TabbedDirectoryProps;
}

export interface StepsListProps {
    steps: StepProps[];
}

export interface StepHeaderProps {
    title: string;
    stepOrder: number;
    description: string;
}

export interface PreambleProps {
    innerHTML: string;
}

export interface AnswerProps {
    id: string;
    text: string;
    example?: string;
    activeAnswerId?: string;
    onClickHandler?: (id : string) => void ;
}

export interface NextButtonProps {
    text: string;
    isVisible: boolean;
}

export interface QuestionAnswerSetProps {
    question: string;
    answers: {
        options: AnswerProps[],
        defaultOption?: AnswerProps
    };
}

export interface QuestionPanelProps {
    question: string;
}

export interface TabsHeaderProps {
    question: string;
}

export interface TabProps {
    id: string;
    text: string;
    isDisabled: boolean;
    onClickHandler?: (tabId: string) => void;
    activeTabId?: string;
}

export interface TabbedDirectoryProps {
    question: string;
    defaultTabId: string;
    results: Object;
}

export interface TabPanelProps {
    id: string;
    activeTabId: string;
}
