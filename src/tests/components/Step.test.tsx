import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { spy } from 'sinon';
import { Step } from '../../components/Step';
import { StepProps } from '../../components/props.types';
import { StepHeader } from '../../components/StepHeader';
import { Preamble } from '../../components/Preamble';
import '../../setupTests';
import { TabbedDirectory } from "../../components/TabbedDirectory";

describe('Step ', () => {
    let stepProps: StepProps;
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        stepProps = {
            stages: [],
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

    xit('moveToNext calls moveToNext with data',() => {
      const moveToNextSpy = spy();
      wrapper = shallow(<Step {...stepProps} moveToNext={moveToNextSpy} />)
      const instance :any = wrapper.instance();

      expect(moveToNextSpy.called).toEqual(false);
      instance.moveToNext('someText');
      expect(moveToNextSpy.called).toEqual(true);
    });

    xit('moveToNext increments completeAtIndex',() => {
        const moveToNextSpy = spy();
        wrapper = shallow(<Step {...stepProps} moveToNext={moveToNextSpy} />)
        const instance :any = wrapper.instance();

        expect(instance.state.completeAtIndex).toEqual(0);
        instance.moveToNext('someText');
        expect(instance.state.completeAtIndex).toEqual(1);
    });

    xit('renders a TabbedDirectory if TabbedDirectoryProps exists', () => {
        const tabbedDirectoryProps = {
            defaultTabId: 'a',
            question: 'Some question',
            results: []
        };
        wrapper = shallow(<Step {...stepProps} />);
        expect(wrapper.contains(
            <TabbedDirectory {...tabbedDirectoryProps}/>
        )).toBe(true);
    });
});
