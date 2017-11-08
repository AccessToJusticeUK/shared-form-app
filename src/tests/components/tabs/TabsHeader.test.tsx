import * as React from 'react';
import '../../../setupTests';
import { shallow, ShallowWrapper } from 'enzyme';
import { TabsHeader } from '../../../components/tabs/TabsHeader';
import { TabsHeaderProps } from '../../../components/props.types';
import { QuestionPanel } from '../../../components/QuestionPanel';

describe('Section ', () => {
    let wrapper: ShallowWrapper<TabsHeaderProps, any>;

    it('renders a QuestionPanel with a list and children', () => {
        const tabsHeaderProps: TabsHeaderProps = {
            question: 'Some question?'
        };

        wrapper = shallow(<TabsHeader {...tabsHeaderProps}><div className="tabs">Tabs</div></TabsHeader> );
        expect(wrapper.find(QuestionPanel).props().question).toEqual('Some question?');
        expect(wrapper.find('.tabs').length).toEqual(1);
    });
});
