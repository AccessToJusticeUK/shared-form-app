import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Step } from '../../components/Step';
import { StepProps } from '../../components/props.types';
import { StepHeader } from '../../components/StepHeader';
import { Preamble } from '../../components/Preamble';
import { QuestionAnswerSet } from '../../components/QuestionAnswerSet';
import '../../setupTests';
import {TabsList} from "../../components/tabs/TabsList";

describe('Step ', () => {
    let stepProps: StepProps;
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        stepProps = {
            stepOrder: 1,
            isVisible: true,
            questionHeaderProps: {
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

    it('contains a StepHeader, Preamble and QuestionAnswerSet when isVisible is true', () => {
        expect(wrapper.find(StepHeader).length).toEqual(1);
        expect(wrapper.find(Preamble).length).toEqual(1);
        expect(wrapper.find(QuestionAnswerSet).length).toEqual(1);
    });

    it('does not contain a Preamble and QuestionAnswerSet when isVisible is false', () => {
        wrapper = shallow(<Step {...stepProps} isVisible={false} />)

        expect(wrapper.find(StepHeader).length).toEqual(1);
        expect(wrapper.find(Preamble).length).toEqual(0);
        expect(wrapper.find(QuestionAnswerSet).length).toEqual(0);
    });

    it('renders a TabsList if tabsListProps exists', () => {
        const tabsListProps = {
            defaultTabId: 'a',
            question: 'Some question',
            tabs: [
                { id: 'a', text: 'A', isActive: true, isDisabled: false }
            ]
        };
        wrapper = shallow(<Step {...stepProps} tabsListProps={tabsListProps} />);
        expect(wrapper.contains(
            <TabsList {...tabsListProps}/>
        )).toBe(true);
    });
});
