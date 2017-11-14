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
                {id: '2', text: 'Answer 2', example: 'e.g. test', }
            ],
            defaultOption: {id: '0', text: 'None apply'}
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

        const answers = wrapper.find(Answer);
        expect(answers.length).toEqual(3);
        expect(answers.at(0).props().text).toEqual("Answer 1");
        expect(answers.at(1).props().text).toEqual("Answer 2");
        expect(answers.at(2).props().text).toEqual("None apply");
    });

    it('changes active answer text state to the text of the selected answer', () => {
        const instance :any = wrapper.instance();

        expect(instance.state.activeAnswerText).toEqual('');
        instance.handleAnswerClick('someText');
        expect(instance.state.activeAnswerText).toEqual('someText');
    });
});
