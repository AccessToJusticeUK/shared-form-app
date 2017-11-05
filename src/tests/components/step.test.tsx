import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Step } from '../../components/step';
import { StepProps } from '../../components/props.types';
import { QuestionHeader } from '../../components/questionHeader';
import { Section } from '../../components/section';
import { QuestionAnswerSet } from '../../components/questionAnswerSet';
import '../../setupTests';

describe('Step ', () => {
    let stepProps: StepProps;
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        stepProps = {
            stepOrder: 1,
            questionHeaderProps: {
                stepOrder: 1,
                title: 'Step 1',
                description: 'Question'
            },

            sectionProps: {
                isVisible: true,
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

    it('renders a div containing a QuestionHeader, Section and QuestionAnswerSet', () => {
        expect(wrapper.contains(
            <div className="jumbotron">
                <div className="step-content">
                    <QuestionHeader {...stepProps.questionHeaderProps} />
                    <Section {...stepProps.sectionProps} />
                    <QuestionAnswerSet {...stepProps.questionAnswerSetProps} />
                </div>
            </div>
        )).toBe(true);
    });
});
