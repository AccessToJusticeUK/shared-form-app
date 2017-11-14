import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { Button } from '../../components/Button';

describe('Button ', () => {
    it('appends Button classes if present', () => {
        const wrapper = shallow(<Button classNames="some-class some-other-class" />)
        expect(wrapper.find('.button').props().className).toEqual('button some-class some-other-class');
    });

    it('does not append Button classes if not present', () => {
        const wrapper = shallow(<Button />)
        expect(wrapper.find('.button').props().className).toEqual('button');
    });
});
