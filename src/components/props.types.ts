export interface StageProps {
  stageOrder: number;
  shouldBeOpen: boolean;
  questionAnswerSetProps?: QuestionAnswerSetProps;
  tabbedDirectoryProps?: TabbedDirectoryProps;
}

export interface StepProps extends NavigationProps {
    stepOrder: number;
    shouldBeOpen: boolean;
    stepHeaderProps: StepHeaderProps;
    preambleProps: PreambleProps;
    questionAnswerSetProps?: QuestionAnswerSetProps;
    tabbedDirectoryProps?: TabbedDirectoryProps;
    openNextStep?: (data :string) => void;
}

export interface StepsListProps extends NavigationProps {
    steps: StepProps[];
}

export interface NavigationProps {
  openAtIndex?: number;
  moveToNext?: (data :string) => void;
}

export interface WrappedNavigationProps extends StepsListProps, StepProps {}

export interface StepHeaderProps {
    title: string;
    stepOrder: number;
    description: string;
    isStepComplete?: boolean;
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
