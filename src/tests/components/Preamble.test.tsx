import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Preamble } from '../../components/Preamble';
import { PreambleProps } from '../../components/props.types';
import '../../setupTests';

describe('Section ', () => {
    let wrapper: ShallowWrapper<PreambleProps, any>;

    it('renders a div with innerHTML', () => {
        const preambleProps: PreambleProps = {
            innerHTML: 'Section text'
        };

        wrapper = shallow(<Preamble {...preambleProps} />);
        expect(wrapper.contains(<div className="step-preamble">Section text</div>)).toBe(true);
    });
});
