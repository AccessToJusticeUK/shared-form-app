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
                shouldBeOpen: true,
                stepHeaderProps: {
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
                shouldBeOpen: true,
                stepHeaderProps: {
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
                shouldBeOpen: true,
                stepHeaderProps: {
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

    it('renders all steps in the correct order', () => {
        const steps = wrapper.find(Step);
        expect(steps.length).toEqual(3);
        expect(steps.at(0).props().stepOrder).toEqual(1);
        expect(steps.at(1).props().stepOrder).toEqual(2);
        expect(steps.at(2).props().stepOrder).toEqual(3);
    });

    it('moveToNextStep increments openAtIndex state when called', () => {
        const instance :any = wrapper.instance();
        expect(instance.state.openAtIndex).toEqual(1);
        instance.moveToNextStep('someText');
        expect(instance.state.openAtIndex).toEqual(2);
    });

    it('the only step open is the one who matches openAtIndex in state',() => {
      const steps = wrapper.find(Step);
      //starts off with the first step which is open
      expect(steps.at(0).props().shouldBeOpen).toEqual(true);
      expect(steps.at(1).props().shouldBeOpen).toEqual(false);
      expect(steps.at(2).props().shouldBeOpen).toEqual(false);
    });

});
