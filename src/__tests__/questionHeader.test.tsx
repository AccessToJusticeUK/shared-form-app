import * as React from 'react';
import { shallow } from 'enzyme';
import { QuestionHeader } from '../components/questionHeader';

import '../setupTests';

describe("QuestionHeader  ", () => {
    it("renders header with a title that was passed to it", () => {
        let title = "Example question";
        let testHeader = {
            title: title
        }
        let wrapper = shallow(<QuestionHeader {...testHeader}/>)
        expect(wrapper.contains(<div>Example question</div>));
    });
});
