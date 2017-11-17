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
            step2 = {
                stages: [],
                id: 2,
                shouldBeOpen: false,
                stepHeaderProps: {
                    stepId: 2,
                    title: 'Step ',
                    description: ' - Question one'
                },

                preambleProps: {
                    innerHTML: 'Section'
                }
            },
            step3 = {
                stages: [],                
                id: 3,
                shouldBeOpen: false,
                stepHeaderProps: {
                    stepId: 3,
                    title: 'Step ',
                    description: ' - Question two'
                },

                preambleProps: {
                    innerHTML: 'Section'
                }
            },
            step1 = {
                stages: [],                
                id: 1,
                shouldBeOpen: true,
                stepHeaderProps: {
                    stepId: 1,
                    title: 'Step ',
                    description: ' - Question three'
                },
                preambleProps: {
                    innerHTML: 'Section'
                }
            }
        ]
    }
     wrapper = mount(<StepsList steps={testData.steps} nextToComplete={1}/>)
    });

    it('renders all steps in the correct order', () => {
        const steps = wrapper.find(Step);
        expect(steps.length).toEqual(3);
        expect(steps.at(0).props().id).toEqual(1);
        expect(steps.at(1).props().id).toEqual(2);
        expect(steps.at(2).props().id).toEqual(3);
    });

    it('the only step open is the one who matches openAtIndex in props',() => {
      const steps = wrapper.find(Step);
      expect(steps.at(0).props().shouldBeOpen).toEqual(true);
      expect(steps.at(1).props().shouldBeOpen).toEqual(false);
      expect(steps.at(2).props().shouldBeOpen).toEqual(false);
    });
});
