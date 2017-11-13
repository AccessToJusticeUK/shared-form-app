import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import '../../setupTests';
import { TabbedDirectory } from '../../components/TabbedDirectory';
import { Tab } from '../../components/tabs/Tab';
import { TabPanel } from '../../components/tabs/TabPanel';
import { TabbedDirectoryProps } from '../../components/props.types';
import { TabsHeader } from '../../components/tabs/TabsHeader';

describe('TabbedDirectory', () => {
    let wrapper: ShallowWrapper;
    let testData: TabbedDirectoryProps;
    let defaultTabId: string;

    beforeEach(() => {
        testData = {
            question: 'Example question',
            defaultTabId: defaultTabId = 'a',
            results: {
                a: [ 'AXA', 'Admiral' ],
                b: [],
                c: [ 'CAXA', 'Cadmiral' ]
            }
        };
        wrapper = shallow(<TabbedDirectory {...testData} />)
    });

    it('contains a tabs header with question props', () => {
        const tabsHeader = wrapper.find(TabsHeader);
        expect(tabsHeader.length).toEqual(1)
        expect(tabsHeader.props().question).toEqual('Example question')
    });

    it('renders all tabs with correct props', () => {
        const renderedTab1 = wrapper.find(Tab).at(0);
        const renderedTab2 = wrapper.find(Tab).at(1);
        const renderedTab3 = wrapper.find(Tab).at(2);

        expect(renderedTab1.props().id).toEqual('a');
        expect(renderedTab1.props().text).toEqual('A');
        expect(renderedTab1.props().isDisabled).toBe(false);

        expect(renderedTab2.props().id).toEqual('b');
        expect(renderedTab2.props().text).toEqual('B');
        expect(renderedTab2.props().isDisabled).toBe(true);

        expect(renderedTab3.props().id).toEqual('c');
        expect(renderedTab3.props().text).toEqual('C');
        expect(renderedTab3.props().isDisabled).toBe(false);
    })

    it('renders all tab panels with correct props', () => {
        const renderedTabPanel1 = wrapper.find(TabPanel).at(0);
        const renderedTabPanel2 = wrapper.find(TabPanel).at(1);
        const renderedTabPanel3 = wrapper.find(TabPanel).at(2);

        expect(renderedTabPanel1.props().id).toEqual('a');
        expect(renderedTabPanel2.props().id).toEqual('b');
        expect(renderedTabPanel3.props().id).toEqual('c');
    })

    it('sets active tab id state as default tab id and passes active tab id as props to Tab and TabPanel', () => {
        let instance: any;
        instance = wrapper.instance();

        expect(instance.state.activeTabId).toEqual(defaultTabId);
        expect(wrapper.find(Tab).at(0).props().activeTabId).toEqual(defaultTabId);
        expect(wrapper.find(TabPanel).at(0).props().activeTabId).toEqual(defaultTabId);
    })

    describe('handleTabClick', () => {
        it('should change the active tab id state to tabId passed in', () => {
            let instance: any;
            instance = wrapper.instance();

            expect(instance.state.activeTabId).toEqual(defaultTabId);
            instance.handleTabClick('someId');
            expect(instance.state.activeTabId).toEqual('someId');
        })
    })
});
