import * as React from 'react';
import { shallow } from 'enzyme';
import '../../../setupTests';
import { TabPanel } from '../../../components/tabs/TabPanel';
import { spy } from 'sinon';

describe('TabPanel ', () => {
    it('renders nothing if id passed in does not equal active tab id', () => {
       const wrapper = shallow(<TabPanel id='someId' activeTabId='someOtherId' />);

       expect(wrapper.getElement()).toEqual(null)
    });

    it('renders the tab panel with children if id passed in equals active tab id', () => {
        const content = <div className="content">Some panel content</div>;
        const wrapper = shallow(<TabPanel id='someId' activeTabId='someId'>{content}</TabPanel>);

        expect(wrapper.find('.tab-panel').length).toEqual(1);
        expect(wrapper.find('.content').length).toEqual(1);
    });
});
