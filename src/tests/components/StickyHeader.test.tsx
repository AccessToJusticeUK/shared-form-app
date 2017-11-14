import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { StickyHeader } from '../../components/StickyHeader';
import { StickyHeaderProps } from '../../components/props.types';
import '../../setupTests';

describe('StickyHeader', () => {
    let wrapper: ShallowWrapper<StickyHeaderProps, any>;

    it('renders an image and title from props', () => {
        const stickyHeaderProps: StickyHeaderProps = {
            logoSrc: '/some/path',
            title: 'A great title for this app'
        };

        wrapper = shallow(<StickyHeader {...stickyHeaderProps} />);
        expect(wrapper.find('.sticky-header-logo').props().src).toEqual('/some/path');
        expect(wrapper.find('.sticky-header-title').text()).toEqual('A great title for this app');
    });
});