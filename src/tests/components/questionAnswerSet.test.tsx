import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { QuestionAnswerSet } from '../../components/questionAnswerSet';
import '../../setupTests';

describe("QuestionAnswerSet ", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        const question = "Example question";
        const answers = ["Answer 1", "Answer 2", "Answer 3"];

        const testQuestionAnswerSet = {
            question,
            answers,
        }
        wrapper = shallow(<QuestionAnswerSet {...testQuestionAnswerSet} />)
    });

    it("renders section with a question and answer set that was passed to it", () => {
        expect(wrapper
            .contains(<div className="qas">
                    <div className="qas-question">Example question</div>
                    <div className="qas-answers">
                        <div className="qas-answer">
                            <div className="qas-answer-text">Answer 1</div>
                        </div>
                        <div className="qas-answer">
                            <div className="qas-answer-text">Answer 2</div>
                        </div>
                        <div className="qas-answer">
                            <div className="qas-answer-text">Answer 3</div>
                        </div>
                    </div>
                </div>))
            .toBe(true);
    });
});
