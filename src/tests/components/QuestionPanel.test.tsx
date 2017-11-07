import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import '../../setupTests';
import { QuestionPanel } from '../../components/QuestionPanel';

describe('QuestionPanel ', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        const testQuestionPanel = {
            question: 'Example question'
        }
        wrapper = shallow(<QuestionPanel {...testQuestionPanel}>
                                    <div>Some content</div>
                                </QuestionPanel>)
    });

    it('renders question panel with question and children', () => {
        expect(wrapper.contains(<div className="qas-question">Example question</div>)).toBe(true);
        expect(wrapper.contains(<div>Some content</div>)).toBe(true);
    });
});
