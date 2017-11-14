export interface StepProps {
    stepOrder: number;
    shouldBeOpen: boolean;
    stepHeaderProps: StepHeaderProps;
    preambleProps: PreambleProps;
    questionAnswerSetProps?: QuestionAnswerSetProps;
    tabbedDirectoryProps?: TabbedDirectoryProps;
    openNextStep?: (data :string) => void;
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
    activeAnswerText?: string;
    onClickHandler?: (id: string) => void ;
}

export interface ButtonProps {
    classNames?: string;
    onClickHandler?: () => void;
}

export interface QuestionAnswerSetProps {
    question: string;
    handleNextButtonClick?: (data: string) => void;
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
    panelContentFactory?: () => any;
}

export interface StickyHeaderProps {
    title: string;
    logoSrc: string
}

export interface IconProps {
    text: string;
    imgSrc: string;
    classNames?: string;
}