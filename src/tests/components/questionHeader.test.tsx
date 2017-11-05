import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { QuestionHeader } from '../../components/questionHeader';
import '../../setupTests';

describe('QuestionHeader ', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        let title = 'Example question ';
        let description = 'hey';
        let stepOrder = 1;

        let testHeader = {
            title,
            stepOrder,
            description
        }
        wrapper = shallow(<QuestionHeader {...testHeader} />)
    });

    it('renders header with a title and description that were passed to it', () => {
        expect(wrapper.contains(<p><span id="step">Example question 1</span><span id="desc">hey</span></p>)).toBe(true);
    });
});
