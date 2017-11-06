import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { StepHeader } from '../../components/StepHeader';
import '../../setupTests';

describe('StepHeader ', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        let title = 'Example question';
        let description = 'hey?';
        let stepOrder = 1;

        let testHeader = {
            title,
            stepOrder,
            description
        }
        wrapper = shallow(<StepHeader {...testHeader} />)
    });

    it('renders header with a title and description that were passed to it', () => {
        expect(wrapper.contains(<div className="step-heading-number">Example question&nbsp;1 -&nbsp;</div>)).toBe(true);
        expect(wrapper.contains(<div className="step-heading-question">hey?</div>)).toBe(true);
    });
});
