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
                stages: [],
                stepOrder: 2,
                completeAtIndex: 0,
                shouldBeOpen: true,
                stepHeaderProps: {
                    stepOrder: 2,
                    title: 'Step ',
                    description: ' - Question one'
                },

                preambleProps: {
                    innerHTML: 'Section'
                }
            },
            step2 = {
                stages: [],                
                stepOrder: 3,
                completeAtIndex: 0,
                shouldBeOpen: true,
                stepHeaderProps: {
                    stepOrder: 3,
                    title: 'Step ',
                    description: ' - Question two'
                },

                preambleProps: {
                    innerHTML: 'Section'
                }
            },
            step3 = {
                stages: [],                
                stepOrder: 1,
                completeAtIndex: 0,
                shouldBeOpen: true,
                stepHeaderProps: {
                    stepOrder: 1,
                    title: 'Step ',
                    description: ' - Question three'
                },
                preambleProps: {
                    innerHTML: 'Section'
                }
            }
        ]
    }
     wrapper = mount(<StepsList steps={testData.steps} openAtIndex={1}/>)
    });

    it('renders all steps in the correct order', () => {
        const steps = wrapper.find(Step);
        expect(steps.length).toEqual(3);
        expect(steps.at(0).props().stepOrder).toEqual(1);
        expect(steps.at(1).props().stepOrder).toEqual(2);
        expect(steps.at(2).props().stepOrder).toEqual(3);
    });

    it('the only step open is the one who matches openAtIndex in props',() => {
      const steps = wrapper.find(Step);
      expect(steps.at(0).props().shouldBeOpen).toEqual(true);
      expect(steps.at(1).props().shouldBeOpen).toEqual(false);
      expect(steps.at(2).props().shouldBeOpen).toEqual(false);
    });
});
