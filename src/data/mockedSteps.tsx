import { StepProps } from "../components/step";
import { StepsListProps } from "../components/stepsList";

let step1 : StepProps;
let step2 : StepProps;
let step3 : StepProps;
let step4 : StepProps;
let step5 : StepProps;

export let mockedData: StepsListProps;

mockedData= {
    steps: [
        step1 = {
            stepOrder: 2,
            questionHeaderProps: {
                stepOrder: 2,
                title: "Step ",
                description: " - Question one"
            },
        
            sectionProps: {
                isVisible: true,
                innerHTML: "Section"
            },

            questionAnswerSetProps: {
                question: 'Which of the following options best describes your legal issue?'
            }
        },

        step2 = {
            stepOrder: 1,
            questionHeaderProps: {
                stepOrder: 1,
                title: "Step ",
                description: " - Question two"
            },
        
            sectionProps: {
                isVisible: false,
                innerHTML: "Section"
            },

            questionAnswerSetProps: {
                question: 'Which of the following options best describes your legal issue?'
            }
        },

        step3 = {
            stepOrder: 3,
            questionHeaderProps: {
                stepOrder: 3,
                title: "Step ",
                description: " - Question three"
            },
        
            sectionProps: {
                isVisible: false,
                innerHTML: "Section"
            },

            questionAnswerSetProps: {
                question: 'Which of the following options best describes your legal issue?'
            }
        },

        step4 = {
            stepOrder: 4,
            questionHeaderProps: {
                stepOrder: 4,
                title: "Step ",
                description: " - Question four"
            },
        
            sectionProps: {
                isVisible: false,
                innerHTML: "Section"
            },

            questionAnswerSetProps: {
                question: 'Which of the following options best describes your legal issue?'
            }
        },

        step5 = {
            stepOrder: 5,
            questionHeaderProps: {
                stepOrder: 5,
                title: "Step ",
                description: " - Question five"
            },
        
            sectionProps: {
                isVisible: false,
                innerHTML: "Section"
            },

            questionAnswerSetProps: {
                 question: 'Which of the following options best describes your legal issue?'
            }
       }
    ]
}


    
