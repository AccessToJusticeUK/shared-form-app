import * as React from 'react';
import { shallow } from 'enzyme';
import '../../../setupTests';
import { TabPanel } from '../../../components/tabs/TabPanel';

describe('TabPanel ', () => {
    const panelContentFactory = () => {
        return (
            <div className="content">Some content</div>
        )
    }

    it('renders nothing if id passed in does not equal active tab id', () => {
        const wrapper = shallow(<TabPanel id='someId' panelContentFactory={panelContentFactory} activeTabId='someOtherId' />);
       expect(wrapper.getElement()).toEqual(null)
    });

    it('renders the tab panel with whatever panel content factory returns if id passed in equals active tab id', () => {
        const wrapper = shallow(<TabPanel id='someId' panelContentFactory={panelContentFactory} activeTabId='someId' />);

        expect(wrapper.find('.tab-panel').length).toEqual(1);
        expect(wrapper.find('.content').length).toEqual(1);
    });
});
