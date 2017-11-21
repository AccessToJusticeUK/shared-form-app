import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { StepHeader } from '../../components/StepHeader';
import { Icon } from '../../components/Icon';
import { StepHeaderProps } from '../../components/props.types';
import '../../setupTests';

describe('StepHeader ', () => {
    let wrapper: ShallowWrapper;
    let testHeader: StepHeaderProps;

    beforeEach(() => {
        const title = 'Example question';
        const description = 'hey?';
        const stepId = 1;
        testHeader = {
            title,
            stepId,
            description
        }
        wrapper = shallow(<StepHeader {...testHeader} />)
    });

    it('renders header with a title and description that were passed to it', () => {
        expect(wrapper.contains(<span className="step-header-number">Example question&nbsp;1 -&nbsp;</span>)).toBe(true);
        expect(wrapper.contains(<span className="step-header-question">hey?</span>)).toBe(true);
    });

    it('does not render icon if isComplete is false', () => {
        wrapper = shallow(<StepHeader {...testHeader} isComplete={false} />)
        expect(wrapper.find(Icon).length).toEqual(0);
    });

    it('renders icon if isComplete is true', () => {
        wrapper = shallow(<StepHeader {...testHeader} isComplete={true} />)
        expect(wrapper.find(Icon).length).toEqual(1);
    });
});
