import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { StepStage } from '../../components/StepStage';
import { StepStageProps } from '../../components/props.types';
import { TabbedDirectory } from "../../components/TabbedDirectory";
import { QuestionAnswerSet } from "../../components/QuestionAnswerSet";
import { PolicySelection } from "../../components/PolicySelection";
import '../../setupTests';

describe('StepStage',() => {
    let wrapper: ShallowWrapper;
    
    it('renders a TabbedDirectory, QuestionAnswerSet and PolicySelection if shouldBeOpen', () => {        
    const stepStageProps: StepStageProps =
            {   
                id: 2,                
                questionAnswerSetProps: {
                    answers: {
                        options: [{ id: '1', text: 'Car' }],
                    }
                },  
                tabbedDirectoryProps: {
                    defaultTabId: 'a',
                    question: 'Some question',
                    results: [],
                },
                policySelectionProps: {
                    policies: ['bla'],
                }            
            }
        wrapper = shallow(<StepStage {...stepStageProps} shouldBeOpen={true}/>);    
        
        const questionAnswerSet = wrapper.find(QuestionAnswerSet);
        expect(questionAnswerSet.at(0).props().answers).toEqual({options: [{ id: '1', text: 'Car' }]});
        
        const tabbedDirectory = wrapper.find(TabbedDirectory);
        expect(tabbedDirectory.at(0).props().defaultTabId).toEqual('a');
        
        const policySelection = wrapper.find(PolicySelection);
        expect(policySelection.at(0).props().policies).toEqual(['bla']);
    });
});
