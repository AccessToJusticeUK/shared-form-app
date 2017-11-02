import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { QuestionAnswerSet } from '../../components/questionAnswerSet';
import '../../setupTests';

describe("QuestionAnswerSet ", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        let question = "Example question";
        let testQuestionAnswerSet = {
            question,
        }
        wrapper = shallow(<QuestionAnswerSet {...testQuestionAnswerSet} />)
    });

    it("renders section with a question from the question and answer set that was passed to it", () => {
        expect(wrapper.contains(<p><span id="qas-question">Example question</span></p>)).toBe(true);
    });
});
