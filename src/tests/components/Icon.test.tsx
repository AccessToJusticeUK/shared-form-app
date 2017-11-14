import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { Icon } from '../../components/Icon';

describe('Icon ', () => {
    it('renders icon text if present', () => {
        const wrapper = shallow(<Icon text="Some text" imgSrc="/some/path" />)
        expect(wrapper.find('.icon-text').length).toEqual(1);
    });

    it('does not render icon text if not present', () => {
        const wrapper = shallow(<Icon imgSrc="/some/path" />)
        expect(wrapper.find('.icon-text').length).toEqual(0);
    });

    it('appends icon classes if present', () => {
        const wrapper = shallow(<Icon imgSrc="/some/path" classNames="some-class some-other-class" />)
        expect(wrapper.find('.icon').props().className).toEqual('icon some-class some-other-class');
    });

    it('does not append icon classes if not present', () => {
        const wrapper = shallow(<Icon imgSrc="/some/path" />)
        expect(wrapper.find('.icon').props().className).toEqual('icon');
    });
});
