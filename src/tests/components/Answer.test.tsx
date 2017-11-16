import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { spy } from 'sinon';
import { Answer } from '../../components/Answer';
import { AnswerProps } from '../../components/props.types';
import '../../setupTests';

describe('Answer ', () => {
    let wrapper: ShallowWrapper;
    let answer: AnswerProps;
    beforeEach(() => {
        answer = {
            id: '1',
            text: 'Answer 1',
            example: 'e.g. test'
        };
        wrapper = shallow(<Answer {...answer} />)
    });

    it('renders section with an answer that was passed to it', () => {
        expect(wrapper.contains('Answer 1')).toBe(true);
        expect(wrapper.contains(<div className='answer-example'>e.g. test</div>)).toBe(true);
    });

    it('should append active class to tab if activeAnswerText is the same as answer text', () => {
        const clickedAnswer = {
            id: '1',
            text: 'Answer 1',
            example: 'e.g. test',
            activeAnswerText: 'Answer 1'
        };
        const clickedWrapper = shallow(<Answer {...clickedAnswer} />)
        const answer = clickedWrapper.find('.answer');
        expect(answer.hasClass('selected')).toBe(true)
    });

    it('should trigger on click handler with id if handler exists', () => {
        const onClickHandlerSpy = spy();
        wrapper = shallow(<Answer {...answer} onClickHandler={onClickHandlerSpy} />);

        const clickEvent = { preventDefault: spy() };
        wrapper.find('.answer').simulate('click', clickEvent);
        expect(onClickHandlerSpy.firstCall.args[0]).toEqual(answer.text)
    });
});
