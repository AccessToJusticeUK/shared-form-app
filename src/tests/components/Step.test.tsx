import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { spy } from 'sinon';
import { Step } from '../../components/Step';
import { StepProps } from '../../components/props.types';
import { StepHeader } from '../../components/StepHeader';
import { Preamble } from '../../components/Preamble';
import { QuestionAnswerSet } from '../../components/QuestionAnswerSet';
import '../../setupTests';
import { TabbedDirectory } from "../../components/TabbedDirectory";

describe('Step ', () => {
    let stepProps: StepProps;
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        stepProps = {
            stepOrder: 1,
            shouldBeOpen: true,
            stepHeaderProps: {
                stepOrder: 1,
                title: 'Step 1',
                description: 'Question'
            },

            preambleProps: {
                innerHTML: 'Section'
            },

            questionAnswerSetProps: {
                question: 'Question',
                answers: {
                    options: [],
                    defaultOption: { id: '0', text: '', example: '' }
                }
            }
        };
        wrapper = shallow(<Step {...stepProps} />)
    });

    it('contains a StepHeader, Preamble and QuestionAnswerSet when shouldBeOpen is true', () => {
        expect(wrapper.find(StepHeader).length).toEqual(1);
        expect(wrapper.find(Preamble).length).toEqual(1);
        expect(wrapper.find(QuestionAnswerSet).length).toEqual(1);
    });

    it('does not contain a Preamble and QuestionAnswerSet when shouldBeOpen is false', () => {
        wrapper = shallow(<Step {...stepProps} shouldBeOpen={false} />)
        expect(wrapper.find(StepHeader).length).toEqual(1);
        expect(wrapper.find(Preamble).length).toEqual(0);
        expect(wrapper.find(QuestionAnswerSet).length).toEqual(0);
    });

    it('handleNextButtonClick calls openNextStep with data',() => {
      const openNextStepSpy = spy();
      wrapper = shallow(<Step {...stepProps} openNextStep={openNextStepSpy} />)
      const instance :any = wrapper.instance();

      expect(openNextStepSpy.called).toEqual(false);
      instance.handleNextButtonClick('someText');
      expect(openNextStepSpy.called).toEqual(true);
    });

    it('handleNextButtonClick sets isStepComplete state to true',() => {
        const openNextStepSpy = spy();
        wrapper = shallow(<Step {...stepProps} openNextStep={openNextStepSpy} />)
        const instance :any = wrapper.instance();

        expect(instance.state.isStepComplete).toEqual(false);
        instance.handleNextButtonClick('someText');
        expect(instance.state.isStepComplete).toEqual(true);
    });

    it('renders a TabbedDirectory if TabbedDirectoryProps exists', () => {
        const tabbedDirectoryProps = {
            defaultTabId: 'a',
            question: 'Some question',
            results: []
        };
        wrapper = shallow(<Step {...stepProps} tabbedDirectoryProps={tabbedDirectoryProps} />);
        expect(wrapper.contains(
            <TabbedDirectory {...tabbedDirectoryProps}/>
        )).toBe(true);
    });
});
