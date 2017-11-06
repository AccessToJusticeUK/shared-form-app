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
            stepOrder: 1,
            questionHeaderProps: {
                stepOrder: 1,
                title: 'Step',
                description: 'What type of issue do you have?'
            },

            sectionProps: {
                isVisible: true,
                innerHTML: 'The type of legal issue you have helps us to identify which of your existing financial\
                 products may offer you legal insurance'
            },

            questionAnswerSetProps: {
                question: 'Which of the following options best describes your legal issue?',
                answers: {
                    defaultOption: { id: '0', text: 'My issue is not listed above', example: '' },
                    options: [
                        { id: '1', text: 'Consumer disputes', example: '' },
                        { id: '2', text: 'Criminal defence', example: '' },
                        { id: '3', text: 'Employment disputes', example: 'e.g. redundancy or conflict in work' },
                        { id: '4', text: 'Identity theft', example: '' },
                        { id: '5', text: 'Neighbour disputes', example: '' },
                        { id: '6', text: 'Personal injury', example: '' },
                        { id: '7', text: 'Provision of an inadequate service', example: '' },
                        { id: '8', text: 'Tax investigation', example: '' }
                    ]
                }
            }
        },

        step2 = {
            stepOrder: 2,
            questionHeaderProps: {
                stepOrder: 2,
                title: 'Step',
                description: 'Question two'
            },

            sectionProps: {
                isVisible: false,
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: {
                    options: [], 
                    defaultOption: { id: '', text: 'I have no insurance policies - skip this step', example: '' }
                }
            }
        },

        step3 = {
            stepOrder: 3,
            questionHeaderProps: {
                stepOrder: 3,
                title: 'Step',
                description: 'Question three'
            },

            sectionProps: {
                isVisible: false,
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: {
                    options: [], 
                    defaultOption: { id: '0', text: 'I have no paid Bank accounts or Credit Cards - skip this step', example: '' }
                }
            }
        },

        step4 = {
            stepOrder: 4,
            questionHeaderProps: {
                stepOrder: 4,
                title: 'Step',
                description: 'Question four'
            },

            sectionProps: {
                isVisible: false,
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: {
                    options: [], 
                    defaultOption: { id: '0', text: 'Not implemented yet', example: '' }
                }
            }
        },

        step5 = {
            stepOrder: 5,
            questionHeaderProps: {
                stepOrder: 5,
                title: 'Step',
                description: 'Question five'
            },

            sectionProps: {
                isVisible: false,
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: {
                    options: [], 
                    defaultOption: { id: '0', text: 'Not implemented yet', example: '' }
                }
            }
        }
    ]
};
