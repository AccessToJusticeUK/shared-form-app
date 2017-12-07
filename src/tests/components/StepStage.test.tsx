import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { spy } from 'sinon';
import { StepStage } from '../../components/StepStage';
import { Button } from '../../components/Button';
import { StepStageProps } from '../../components/props.types';
import { TabbedDirectory } from "../../components/TabbedDirectory";
import { QuestionAnswerSet } from "../../components/QuestionAnswerSet";
import { PolicySelection } from "../../components/PolicySelection";
import '../../setupTests';

describe('StepStage',() => {
    let wrapper: ShallowWrapper;

    const stepStageProps: StepStageProps = {
        id: 2,
        questionAnswerSetProps: {
            answers: {
                options: [{ text: 'Car' }],
            }
        },
        tabbedDirectoryProps: {
            defaultTabId: 'a',
            question: 'Some question',
            results: [],
        }
    }

    it('does not render a TabbedDirectory, QuestionAnswerSet and PolicySelection if shouldBeOpen is false', () => {
        wrapper = shallow(<StepStage {...stepStageProps} shouldBeOpen={false}/>);

        expect(wrapper.find(QuestionAnswerSet).length).toEqual(0);
        expect(wrapper.find(TabbedDirectory).length).toEqual(0);
        expect(wrapper.find(PolicySelection).length).toEqual(0);
    })

    it('renders a TabbedDirectory, QuestionAnswerSet if shouldBeOpen', () => {
        wrapper = shallow(<StepStage {...stepStageProps} shouldBeOpen={true}/>);

        const questionAnswerSet = wrapper.find(QuestionAnswerSet);
        expect(questionAnswerSet.at(0).props().answers).toEqual({options: [{ text: 'Car' }]});

        const tabbedDirectory = wrapper.find(TabbedDirectory);
        expect(tabbedDirectory.at(0).props().defaultTabId).toEqual('a');
    });

    it('sets state of activeAnswerText if answerSelected is triggered and shows next button if skipNextValidation is not true', () => {
        wrapper = shallow(<StepStage {...stepStageProps} shouldBeOpen={true} />);

        let instance: any;
        instance = wrapper.instance();

        expect(instance.state.activeAnswerText).toEqual('');
        expect(wrapper.find(Button).length).toEqual(0);

        instance.answerSelected('some answer text');
        wrapper.update();

        expect(instance.state.activeAnswerText).toEqual('some answer text');
        expect(wrapper.find(Button).length).toEqual(1);
    });

    it('shows next button if skipNextValidation is true', () => {
        wrapper = shallow(<StepStage {...stepStageProps} shouldBeOpen={true} skipNextValidation={true} />);

        expect(wrapper.find(Button).length).toEqual(1);
    });

    it('should move to next if resetAndMoveToNext is called', () => {
        const moveToNextStageSpy = spy();
        wrapper = shallow(<StepStage {...stepStageProps} shouldBeOpen={true} moveToNextStage={moveToNextStageSpy} />);

        let instance: any;
        instance = wrapper.instance();

        wrapper.update();

        instance.resetAndMoveToNext(1);

        expect(moveToNextStageSpy.firstCall.args[0]).toEqual(1);
    });
});
