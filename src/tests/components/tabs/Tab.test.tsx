import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import '../../../setupTests';
import { Tab } from '../../../components/tabs/Tab';
import { TabProps } from '../../../components/props.types';

describe('Tab ', () => {
    let tab1 : TabProps;
    let tab2 : TabProps;
    let tab3 : TabProps;
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        tab1 = {
            id: 'a',
            text: 'A',
            isActive: true,
            isDisabled: false
        };

        tab2 = {
            id: 'b',
            text: 'B',
            isActive: false,
            isDisabled: false
        };

        tab3 = {
            id: 'c',
            text: 'C',
            isActive: true,
            isDisabled: true
        };

        wrapper = shallow(<Tab {...tab1} />)
    });

    it('contains a list item and link with text rendered inside', () => {
        const listItem = wrapper.find('li.nav-item');

        expect(listItem.length).toEqual(1);
        expect(listItem.contains(<a href='#a'>A</a>)).toBe(true);
    });

    describe('tab classes', () => {
        it('should append active class to list item if isActive is true', () => {
            const listItem = wrapper.find('li.nav-item');

            expect(listItem.hasClass('active')).toBe(true)
        })

        it('should append only disabled class to list item if isDisabled is true', () => {
            wrapper = shallow(<Tab {...tab3} />)
            const listItem = wrapper.find('li.nav-item');

            expect(listItem.hasClass('active')).toBe(false)
            expect(listItem.hasClass('disabled')).toBe(true)
        })

        it('should not append active or disabled class if neither props is true', () => {
            wrapper = shallow(<Tab {...tab2} />)
            const listItem = wrapper.find('li.nav-item');

            expect(listItem.hasClass('active')).toBe(false)
            expect(listItem.hasClass('disabled')).toBe(false)
        })
    })
});