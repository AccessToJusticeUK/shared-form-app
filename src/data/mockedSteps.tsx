import { StepProps } from '../components/step';

export let step1: StepProps;
export let step2: StepProps;
export let step3: StepProps;
export let step4: StepProps;
export let step5: StepProps;

step1 = {
    questionHeaderProps: {
        title: 'Step 1 - ',
        description: 'Question one'
    },

    sectionProps: {
        isVisible: true,
        innerHTML: 'Section'
    },

    questionAnswerSetProps: {
        question: 'Which of the following options best describes your legal issue?'
    }
};

step2 = {
    questionHeaderProps: {
        title: 'Step 2 - ',
        description: 'Question two'
    },

    sectionProps: {
        isVisible: false,
        innerHTML: 'Section'
    },

    questionAnswerSetProps: {
        question: 'Which of the following options best describes your legal issue?'
    }
};

step3 = {
    questionHeaderProps: {
        title: 'Step 3 - ',
        description: 'Question three'
    },

    sectionProps: {
        isVisible: false,
        innerHTML: 'Section'
    },

    questionAnswerSetProps: {
        question: 'Which of the following options best describes your legal issue?'
    }
};

step4 = {
    questionHeaderProps: {
        title: 'Step 4 - ',
        description: 'Question four'
    },

    sectionProps: {
        isVisible: false,
        innerHTML: 'Section'
    },

    questionAnswerSetProps: {
        question: 'Which of the following options best describes your legal issue?'
    }
};

step5 = {
    questionHeaderProps: {
        title: 'Step 5 - ',
        description: 'Question five'
    },

    sectionProps: {
        isVisible: false,
        innerHTML: 'Section'
    },

    questionAnswerSetProps: {
        question: 'Which of the following options best describes your legal issue?'
    }
};