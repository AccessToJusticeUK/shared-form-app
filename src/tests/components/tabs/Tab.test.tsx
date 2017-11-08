import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import '../../../setupTests';
import { Tab } from '../../../components/tabs/Tab';
import { TabProps } from '../../../components/props.types';
import { spy } from 'sinon';

describe('Tab ', () => {
    let tab1 : TabProps;
    let tab2 : TabProps;
    let tab3 : TabProps;
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        tab1 = {
            id: 'a',
            text: 'A',
            activeTabId: 'a',
            isDisabled: false
        };

        tab2 = {
            id: 'b',
            text: 'B',
            activeTabId: 'a',
            isDisabled: false
        };

        tab3 = {
            id: 'c',
            text: 'C',
            activeTabId: 'c',
            isDisabled: true
        };

        wrapper = shallow(<Tab {...tab1} />)
    });

    it('contains a list item and link with text rendered inside', () => {
        const listItem = wrapper.find('li.nav-item');

        expect(listItem.length).toEqual(1);
        expect(listItem.find('.tab-inner').length).toEqual(1);
        expect(listItem.find('.tab-inner').text()).toEqual('A')
    });

    describe('tabClasses', () => {
        it('should append active class to tab if activeTabId is the same as id', () => {
            const tab = wrapper.find('.tab');
            expect(tab.hasClass('active')).toBe(true)
        });

        it('should not append active or disabled class if isDisabled is false and activeTabId is not the same as id', () => {
            wrapper = shallow(<Tab {...tab2} />);
            const tab = wrapper.find('.tab');

            expect(tab.hasClass('active')).toBe(false);
            expect(tab.hasClass('disabled')).toBe(false)
        });

        it('should append only disabled class to tab if isDisabled is true', () => {
            wrapper = shallow(<Tab {...tab3} />);
            const tab = wrapper.find('.tab');

            expect(tab.hasClass('active')).toBe(false);
            expect(tab.hasClass('disabled')).toBe(true)
        })
    });

    describe('on clicking link', () => {
        it('should trigger event prevent default', () => {
            const clickEvent = { preventDefault: spy() };
            wrapper.find('a').simulate('click', clickEvent);
            expect(clickEvent.preventDefault.called).toBe(true)
        });

        it('should trigger on click handler with id if handler exists', () => {
            const onClickHandlerSpy = spy();
            wrapper = shallow(<Tab {...tab1} onClickHandler={onClickHandlerSpy} />);

            const clickEvent = { preventDefault: spy() };
            wrapper.find('a').simulate('click', clickEvent);
            expect(onClickHandlerSpy.firstCall.args[0]).toEqual(tab1.id)
        });

        it('should not trigger on click handler if is disabled is true', () => {
            const onClickHandlerSpy = spy();
            wrapper = shallow(<Tab {...tab3} onClickHandler={onClickHandlerSpy} />);

            const clickEvent = { preventDefault: spy() };
            wrapper.find('a').simulate('click', clickEvent);
            expect(onClickHandlerSpy.called).toBe(false)
        })
    })
});
