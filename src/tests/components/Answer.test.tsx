import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Answer } from '../../components/Answer';
import '../../setupTests';

describe('Answer ', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        const answer = {
            id: '1',
            text: 'Answer 1',
            example: 'e.g. test'
        };

        wrapper = shallow(<Answer {...answer} />)
    });

    it('renders section with an answer that was passed to it', () => {
        expect(wrapper.contains(<div className='qas-answer-text'>Answer 1</div>)).toBe(true);
        expect(wrapper.contains(<div className='qas-answer-example'>e.g. test</div>)).toBe(true);
    });
});
