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
            isVisible: true,

            questionHeaderProps: {
                stepOrder: 1,
                title: 'Step',
                description: 'What type of issue do you have?'
            },

            preambleProps: {
                innerHTML: 'The type of legal issue you have helps us to identify which of your existing financial\
                 products may offer you legal insurance'
            },

            questionAnswerSetProps: {
                question: 'Which of the following options best describes your legal issue?',
                answers: {
                    defaultOption: { id: '0', text: 'My issue is not listed above' },
                    options: [
                        { id: '1', text: 'Consumer disputes'},
                        { id: '2', text: 'Criminal defence'},
                        { id: '3', text: 'Employment disputes', example: 'e.g. redundancy or conflict in work' },
                        { id: '4', text: 'Identity theft'},
                        { id: '5', text: 'Neighbour disputes'},
                        { id: '6', text: 'Personal injury'},
                        { id: '7', text: 'Provision of an inadequate service'},
                        { id: '8', text: 'Tax investigation'}
                    ]
                }
            }
        },

        step2 = {
            stepOrder: 2,
            isVisible: true,

            questionHeaderProps: {
                stepOrder: 2,
                title: 'Step',
                description: 'Existing insurance'
            },

            preambleProps: {
                innerHTML: 'Your existing insurance policies may already come with legal cover to help you.'
            },

            questionAnswerSetProps: {
                question: 'What is the first type of insurance you would like to add?',
                answers: {
                    options: [
                        { id: '1', text: 'Car' },
                        { id: '2', text: 'Home' },
                        { id: '3', text: 'Life', example: 'e.g. redundancy or conflict in work' },
                        { id: '4', text: 'Pet' },
                        { id: '5', text: 'Private medical' },
                        { id: '6', text: 'Life' }
                    ],
                    defaultOption: { id: '', text: 'I have no insurance policies - skip this step' }
                }
            },

            tabbedDirectoryProps: {
                question: 'Who supplies your home insurance?',
                defaultTabId: 'a',
                results: {
                    'a': [
                        'AXA',
                        'Admiral'
                    ],
                    'b': [
                        'BAXA',
                        'Badmiral'
                    ],
                    'c': [
                        'CAXA',
                        'Cadmiral'
                    ],
                    'd': [
                        'DAXA',
                        'Dadmiral'
                    ],
                    'e': [],
                    'f': [],
                    'g': [],
                    'h': [],
                    'i': [],
                    'j': [],
                    'l': [],
                    'm': [],
                    'n': [],
                    'o': [],
                    'p': [],
                    'q': [],
                    'r': [],
                    's': [],
                    't': [],
                    'u': [],
                    'v': [],
                    'w': [],
                    'x': [],
                    'y': [],
                    'z': []
                }
            }
        },

        step3 = {
            stepOrder: 3,
            isVisible: false,

            questionHeaderProps: {
                stepOrder: 3,
                title: 'Step',
                description: 'Question three'
            },

            preambleProps: {
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: {
                    options: [],
                    defaultOption: { id: '0', text: 'I have no paid Bank accounts or Credit Cards - skip this step' }
                }
            }
        },

        step4 = {
            stepOrder: 4,
            isVisible: false,

            questionHeaderProps: {
                stepOrder: 4,
                title: 'Step',
                description: 'Question four'
            },

            preambleProps: {
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: {
                    options: []
                }
            }
        },

        step5 = {
            stepOrder: 5,
            isVisible: false,

            questionHeaderProps: {
                stepOrder: 5,
                title: 'Step',
                description: 'Question five'
            },

            preambleProps: {
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: '',
                answers: {
                    options: []
                }
            }
        }
    ]
};
