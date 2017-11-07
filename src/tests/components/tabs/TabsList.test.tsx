import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import '../../../setupTests';
import { TabsList } from '../../../components/tabs/TabsList';
import { Tab } from '../../../components/tabs/Tab';
import { QuestionPanel } from '../../../components/QuestionPanel';
import { TabProps, TabsListProps } from '../../../components/props.types';

describe('TabsList ', () => {
    let wrapper: ShallowWrapper;
    let testData: TabsListProps;
    let tab1 : TabProps;
    let tab2 : TabProps;
    let tab3 : TabProps;

    beforeEach(() => {
        testData = {
            question: 'Example question',
            tabs: [
                tab1 = {
                    id: 'a',
                    text: 'A',
                    isActive: true,
                    isDisabled: false
                },

                tab2 = {
                    id: 'b',
                    text: 'B',
                    isActive: false,
                    isDisabled: false
                },

                tab3 = {
                    id: 'c',
                    text: 'C',
                    isActive: false,
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
        expect(wrapper.contains(<Tab key={testData.tabs[0].id} {...testData.tabs[0]}/>)).toBe(true);
        expect(wrapper.contains(<Tab key={testData.tabs[1].id} {...testData.tabs[1]}/>)).toBe(true);
        expect(wrapper.contains(<Tab key={testData.tabs[2].id} {...testData.tabs[2]}/>)).toBe(true);
    })
});
