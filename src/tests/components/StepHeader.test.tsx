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

    it('does not render icon if stepId is > completeAtIndex', () => {
        wrapper = shallow(<StepHeader {...testHeader} completeAtIndex={0} />)
        expect(wrapper.find(Icon).length).toEqual(0);
    });

    it('renders icon if completeAtIndex is <= completeAtIndex', () => {
        wrapper = shallow(<StepHeader {...testHeader} completeAtIndex={1} />)
        expect(wrapper.find(Icon).length).toEqual(1);
    });
});
