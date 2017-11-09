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
        expect(wrapper.contains(<span className="step-header-number">Example question&nbsp;1 -&nbsp;</span>)).toBe(true);
        expect(wrapper.contains(<span className="step-header-question">hey?</span>)).toBe(true);
    });
});
