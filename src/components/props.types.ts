export interface StepStageProps {
    id: number;
    questionAnswerSetProps?: QuestionAnswerSetProps;
    tabbedDirectoryProps?: TabbedDirectoryProps;
    policySelectionProps?: PolicySelectionProps
    shouldBeOpen?: boolean;
    moveToNextStage? : (stageOrder : number) => void;
}

export interface StepProps extends NavigationProps {
    id: number;
    shouldBeOpen: boolean;
    stepHeaderProps: StepHeaderProps;
    preambleProps: PreambleProps;
    stages: StepStageProps[];
}

export interface StepsListProps extends NavigationProps {
    steps: StepProps[];
}

export interface NavigationProps {
    nextToComplete?: number;
    moveToNext?: (id :number) => void;
}

export interface WrappedNavigationProps extends StepsListProps, StepProps {}

export interface StepHeaderProps {
    title: string;
    stepId: number;
    description: string;
    completeAtIndex?: number;
}

export interface PreambleProps {
    innerHTML: string;
}

export interface AnswerProps {
    id: string;
    text: string;
    example?: string;
    isSelected?: boolean;
    onClickHandler?: (text: string) => void;
}

export interface ButtonProps {
    classNames?: string;
    onClickHandler?: () => void;
}

export interface PolicySelectionProps {
    policies: string[];
    addAPolicyClicked?: () => void;
}

export interface QuestionAnswerSetProps {
    question?: string;
    onSelectAnswer?: (text: string) => void;
    answers: {
        options: AnswerProps[],
        defaultOption?: AnswerProps
    };
}

export interface QuestionPanelProps {
    question?: string;
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
    onSelectAnswer?: (text: string) => void;
    question: string;
    defaultTabId: string;
    results: Array<{directory_index: string, name: string}>;
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
    imgSrc: string;
    text?: string;
    classNames?: string;
}
