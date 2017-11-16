export interface StepStageProps extends NavigationProps {
  stageOrder: number;
  questionAnswerSetProps?: QuestionAnswerSetProps;
  tabbedDirectoryProps?: TabbedDirectoryProps;
  shouldBeOpen?: boolean;
}

export interface StepProps extends NavigationProps {
    stepOrder: number;
    shouldBeOpen: boolean;
    stepHeaderProps: StepHeaderProps;
    preambleProps: PreambleProps;
    stages: StepStageProps[];
}

export interface StepsListProps extends NavigationProps {
    steps: StepProps[];
}

export interface NavigationProps {
  openAtIndex?: number;
  moveToNext?: () => void;
  completeAtIndex?: number;
  setData?: (id: number, text :string) => void;
  canMoveToNext?: boolean;
}

export interface WrappedNavigationProps extends StepsListProps, StepProps {}

export interface StepHeaderProps {
    title: string;
    stepOrder: number;
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

export interface QuestionAnswerSetProps {
    question: string;
    otherThing?: (text: string) => void;
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
    imgSrc: string;
    text?: string;
    classNames?: string;
}
