import { StepProps, StepsListProps } from '../components/props.types';

let step1: StepProps;
let step2: StepProps;
let step3: StepProps;
let step4: StepProps;
let step5: StepProps;

export let mockedData: StepsListProps;

mockedData = {
    steps: [
        step1 = {
            stepOrder: 2,
            questionHeaderProps: {
                stepOrder: 2,
                title: 'Step ',
                description: ' - Question one'
            },

            sectionProps: {
                isVisible: false,
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: []
            }
        },

        step2 = {
            stepOrder: 1,
            questionHeaderProps: {
                stepOrder: 1,
                title: 'Step ',
                description: ' - Question two'
            },

            sectionProps: {
                isVisible: true,
                innerHTML: 'The type of legal issue you have helps us to identify which of your existing financial\
                 products may offer you legal insurance'
            },

            questionAnswerSetProps: {
                question: 'Which of the following options best describes your legal issue?',
                answers: ['Consumer disputes', 'Criminal defence', 'Employment disputes', 'Identity theft', 
                            'Neighbour disputes', 'Personal injury', 'Provision of an inadequate service', 
                                'Tax investigation', 'My issue is not listed above']
            }
        },

        step3 = {
            stepOrder: 3,
            questionHeaderProps: {
                stepOrder: 3,
                title: 'Step ',
                description: ' - Question three'
            },

            sectionProps: {
                isVisible: false,
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: []
            }
        },

        step4 = {
            stepOrder: 4,
            questionHeaderProps: {
                stepOrder: 4,
                title: 'Step ',
                description: ' - Question four'
            },

            sectionProps: {
                isVisible: false,
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: []
            }
        },

        step5 = {
            stepOrder: 5,
            questionHeaderProps: {
                stepOrder: 5,
                title: 'Step ',
                description: ' - Question five'
            },

            sectionProps: {
                isVisible: false,
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: []
            }
        }
    ]
};
