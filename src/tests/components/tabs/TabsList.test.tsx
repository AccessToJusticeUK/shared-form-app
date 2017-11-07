import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import '../../../setupTests';
import { TabsList } from '../../../components/tabs/TabsList';
import { QuestionPanel } from '../../../components/QuestionPanel';

describe('TabsList ', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        const testTabsList = {
            question: 'Example question'
        }
        wrapper = shallow(<TabsList {...testTabsList} />)
    });

    it('contains a question panel with question props', () => {
        const questionPanel = wrapper.find(QuestionPanel);
        expect(questionPanel.length).toEqual(1)
        expect(questionPanel.props().question).toEqual('Example question')
    });
});
