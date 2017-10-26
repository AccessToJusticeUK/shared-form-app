import * as React from 'react';
import { shallow } from 'enzyme';
import { QuestionHeader } from './questionHeader';
import '../setupTests';

describe("QuestionHeader  ", () => {

    let wrapper : any;

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
        expect(wrapper.contains(<div>Example question hey</div>));
    });

    it("has a className of questionHeader", () => {
        expect(wrapper.props().className).toBe("questionHeader");
    });
});