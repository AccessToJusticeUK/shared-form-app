import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import '../../../setupTests';
import { TabsList } from '../../../components/tabs/TabsList';
import { Tab } from '../../../components/tabs/Tab';
import { TabPanel } from '../../../components/tabs/TabPanel';
import { QuestionPanel } from '../../../components/QuestionPanel';
import { TabProps, TabsListProps } from '../../../components/props.types';

describe('TabsList ', () => {
    let wrapper: ShallowWrapper;
    let testData: TabsListProps;
    let tab1 : TabProps;
    let tab2 : TabProps;
    let tab3 : TabProps;
    let defaultTabId: string;

    beforeEach(() => {
        testData = {
            question: 'Example question',
            defaultTabId: defaultTabId = 'a',
            tabs: [
                tab1 = {
                    id: 'a',
                    text: 'A',
                    isDisabled: false
                },

                tab2 = {
                    id: 'b',
                    text: 'B',
                    isDisabled: false
                },

                tab3 = {
                    id: 'c',
                    text: 'C',
                    isDisabled: true
                }
            ]
        };
        wrapper = shallow(<TabsList {...testData} />)
    });

    it('contains a question panel with question props', () => {
        const questionPanel = wrapper.find(QuestionPanel);
        expect(questionPanel.length).toEqual(1)
        expect(questionPanel.props().question).toEqual('Example question')
    });

    it('renders all tabs correctly', () => {
        const renderedTab1 = wrapper.find(Tab).at(0);
        const renderedTab2 = wrapper.find(Tab).at(1);
        const renderedTab3 = wrapper.find(Tab).at(2);

        expect(renderedTab1.props().id).toEqual(tab1.id);
        expect(renderedTab1.props().text).toEqual(tab1.text);
        expect(renderedTab2.props().id).toEqual(tab2.id);
        expect(renderedTab2.props().text).toEqual(tab2.text);
        expect(renderedTab3.props().id).toEqual(tab3.id);
        expect(renderedTab3.props().text).toEqual(tab3.text);
    })

    it('sets active tab id state as default tab id and passes active tab id as props to Tab and TabPanel', () => {
        const instance = wrapper.instance();

        expect(instance.state.activeTabId).toEqual(defaultTabId);
        expect(wrapper.find(Tab).at(0).props().activeTabId).toEqual(defaultTabId);
        expect(wrapper.find(TabPanel).at(0).props().activeTabId).toEqual(defaultTabId);
    })

    describe('handleTabClick', () => {
        it('should change the active tab id state to tabId passed in', () => {
            const instance = wrapper.instance();
            expect(instance.state.activeTabId).toEqual(defaultTabId);

            instance.handleTabClick('someId');
            expect(instance.state.activeTabId).toEqual('someId');
        })
    })
});
