import * as React from 'react';
import { mount, ReactWrapper} from 'enzyme';
import { StepsList } from '../../components/StepsList';
import { Step } from '../../components/Step';
import { StepsListProps, StepProps } from '../../components/props.types';
import '../../setupTests';

describe('StepsList', () => {
    let wrapper: ReactWrapper;
    let step1 : StepProps;
    let step2 : StepProps;
    let step3 : StepProps;
    let testData: StepsListProps;

    beforeEach( () => {
        testData = {
         steps: [
            step1 = {
                stepOrder: 2,
                shouldBeOpen: false,
                questionHeaderProps: {
                    stepOrder: 2,
                    title: 'Step ',
                    description: ' - Question one'
                },

                preambleProps: {
                    innerHTML: 'Section'
                },

                questionAnswerSetProps: {
                    question: 'Which of the following options best describes your legal issue?',
                    answers: {
                        options: [],
                        defaultOption: {id: '0', text: '', example: ''}
                    }
                }
            },
            step2 = {
                stepOrder: 3,
                shouldBeOpen: false,
                questionHeaderProps: {
                    stepOrder: 3,
                    title: 'Step ',
                    description: ' - Question two'
                },

                preambleProps: {
                    innerHTML: 'Section'
                },

                questionAnswerSetProps: {
                    question: 'Which of the following options best describes your legal issue?',
                    answers: {
                        options: [],
                        defaultOption: {id: '0', text: '', example: ''}
                    }
                }
            },
            step3 = {
                stepOrder: 1,
                shouldBeOpen: false,
                questionHeaderProps: {
                    stepOrder: 1,
                    title: 'Step ',
                    description: ' - Question three'
                },
                preambleProps: {
                    innerHTML: 'Section'
                },

                questionAnswerSetProps: {
                    question: 'Which of the following options best describes your legal issue?',
                    answers: {
                        options: [],
                        defaultOption: {id: '0', text: '', example: ''}
                    }
                 }
            }
        ]
    }
     wrapper = mount(<StepsList steps={testData.steps}/>)
    });


    it('renders a list of steps', () => {
        expect(wrapper.contains(
            <StepsList steps={testData.steps}/>
        )).toBe(true);
    });

    it('renders all steps correctly', () => {
        expect(wrapper.contains(<Step {...testData.steps[0]}/>)).toBe(true);
        expect(wrapper.contains(<Step {...testData.steps[1]}/>)).toBe(true);
        expect(wrapper.contains(<Step {...testData.steps[2]}/>)).toBe(true);
    })

    it('renders all steps in the correct order', () => {
        //TO DO
    })

});
