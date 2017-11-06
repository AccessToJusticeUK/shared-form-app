import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Preamble } from '../../components/Preamble';
import { SectionProps } from '../../components/props.types';
import '../../setupTests';

describe('Section ', () => {
    let wrapper: ShallowWrapper<SectionProps, any>;

    it('renders a div with innerHTML and isVisible properties', () => {
        const visibleSectionProps: SectionProps = {
            isVisible: true,
            innerHTML: 'Section text visible'
        };

        wrapper = shallow(<Preamble {...visibleSectionProps} />);
        expect(wrapper.contains(<div className="step-preamble">Section text visible</div>)).toBe(true);
    });

    it('does not render a div with innerHTML and isVisible is false properties', () => {
        const invisibleSectionProps: SectionProps = {
            isVisible: false,
            innerHTML: 'Section text invisible'
        };

        wrapper = shallow(<Preamble {...invisibleSectionProps} />);
        expect(wrapper.contains(<div className="step-preamble">Section text</div>)).toBe(false);
    });
});
