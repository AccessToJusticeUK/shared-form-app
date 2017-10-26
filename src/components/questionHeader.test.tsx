import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { QuestionHeader } from './questionHeader';
import '../setupTests';

describe("QuestionHeader  ", () => {

    let wrapper : ShallowWrapper;

    beforeEach(() => {
        let title = "Example question ";
        let description = "hey";
        let testHeader = {
            title: title,
            description: description
        }
        wrapper = shallow(<QuestionHeader {...testHeader}/>)
    });

    it("renders header with a title that was passed to it", () => {
        expect(wrapper.contains(<p>Example question hey</p>));
    });
});
