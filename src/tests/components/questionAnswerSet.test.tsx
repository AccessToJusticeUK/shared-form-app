import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { QuestionAnswerSet } from '../../components/questionAnswerSet';
import '../../setupTests';

describe("QuestionAnswerSet ", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        const question = "Example question";
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

    it("renders section with a question and answer set that was passed to it", () => {
        expect(wrapper.contains(<div className="qas-question">Example question</div>)).toBe(true);
        
        expect(wrapper.contains(<div className="qas-answer">
                                    <div className="qas-answer-text">Answer 1</div>
                                    <div className="qas-answer-example">e.g. test</div>
                                </div>)).toBe(true);

        expect(wrapper.contains(<div className="qas-answer-text">Answer 2</div>)).toBe(true);
        
        expect(wrapper.contains(<hr className="default-option" />)).toBe(true);
        
        expect(wrapper.contains(<div className="qas-answer-text">None apply</div>)).toBe(true);

    });
});
