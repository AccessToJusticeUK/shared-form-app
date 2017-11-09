import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { QuestionAnswerSet } from '../../components/QuestionAnswerSet';
import { Answer } from '../../components/Answer';
import '../../setupTests';
import { QuestionPanel } from '../../components/QuestionPanel';

describe('QuestionAnswerSet ', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        const question = 'Example question';
        const answers = {
            options: [
                {id: '1', text: 'Answer 1', example: 'e.g. test'},
                {id: '2', text: 'Answer 2', example: ''}
            ],
            defaultOption: {id: '0', text: 'None apply', example: ''}
        };

        const testQuestionAnswerSet = {
            question,
            answers,
        }
        wrapper = shallow(<QuestionAnswerSet {...testQuestionAnswerSet} />)
    });

    it('renders question panel and answer set that was passed to it', () => {
        const questionPanel = wrapper.find(QuestionPanel);
        expect(questionPanel.length).toEqual(1);
        expect(questionPanel.props().question).toEqual('Example question');

        expect(wrapper.contains(<Answer id='1' text='Answer 1' example='e.g. test' />)).toBe(true);
        expect(wrapper.contains(<Answer id='2' text='Answer 2' example='' />)).toBe(true);
        expect(wrapper.contains(<Answer id='0' text='None apply' example='' />)).toBe(true);
        expect(wrapper.contains(<hr className="divider-dotted" />)).toBe(true);
    });
});
