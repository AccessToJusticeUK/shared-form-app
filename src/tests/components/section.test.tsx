import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Section } from '../../components/section';
import { SectionProps } from '../../components/props.types';
import '../../setupTests';

describe('Section ', () => {
    let visibleSectionProps: SectionProps = {
        isVisible: true,
        innerHTML: 'Section text'
    };

    let invisibleSectionProps: SectionProps = {
        isVisible: false,
        innerHTML: 'Section text'
    };

    let wrapper : ShallowWrapper<SectionProps, any>;

    it('renders a div with innerHTML and isVisible properties', () => {
        wrapper = shallow(<Section {...visibleSectionProps}/>);
        expect(wrapper.contains(<div style={{}}>Section text</div>)).toBe(true);
    });

    it('changes display property to none', () => {
        wrapper = shallow(<Section {...invisibleSectionProps}/>);
        const style = wrapper.find('div').props().style;
        const display = style && style.display;
        expect(display).toEqual('none');
    });
});
