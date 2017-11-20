import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Step } from '../../components/Step';
import { StepProps } from '../../components/props.types';
import { StepHeader } from '../../components/StepHeader';
import { StepStage } from '../../components/StepStage';
import { Preamble } from '../../components/Preamble';
import '../../setupTests';

describe('Step ', () => {
    let stepProps: StepProps;
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        stepProps = {
            stages: [{id:1}, {id:2}],
            id: 1,
            shouldBeOpen: true,
            stepHeaderProps: {
                stepId: 1,
                title: 'Step 1',
                description: 'Question'
            },
            preambleProps: {
                innerHTML: 'Section'
            }
        };
        wrapper = shallow(<Step {...stepProps} />)
    });

    it('contains a StepHeader and Preamble when shouldBeOpen is true', () => {
        expect(wrapper.find(StepHeader).length).toEqual(1);
        expect(wrapper.find(Preamble).length).toEqual(1);
    });

    it('does not contain a Preamble when shouldBeOpen is false', () => {
        wrapper = shallow(<Step {...stepProps} shouldBeOpen={false} />)
        expect(wrapper.find(StepHeader).length).toEqual(1);
        expect(wrapper.find(Preamble).length).toEqual(0);
    });

    it('only sets StepStage\'s shouldBeOpen to true if it is the next to complete',() => {
        wrapper = shallow(<Step {...stepProps} nextToComplete={2} />)
        const stages = wrapper.find(StepStage);
        expect(stages.length).toEqual(2);
        expect(stages.at(0).props().id).toEqual(1);
        expect(stages.at(0).props().shouldBeOpen).toEqual(false);
        expect(stages.at(1).props().id).toEqual(2);
        expect(stages.at(1).props().shouldBeOpen).toEqual(true);
    });
});
