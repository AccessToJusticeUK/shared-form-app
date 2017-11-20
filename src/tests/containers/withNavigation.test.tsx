import * as React from 'react';
import { mount, ReactWrapper} from 'enzyme';
import { withNavigation } from '../../containers/withNavigation';
import { NavigationProps } from '../../components/props.types';
import '../../setupTests';

describe('NavigableStepsList', () => {
  const MockWrappedComponent = (props: NavigationProps) => {
      const onClickHandler = () => {
        if (props.moveToNext) {
          props.moveToNext(1);
        }
      }
      return (
        <div className="link" onClick={onClickHandler}>
          {props.nextToComplete}
        </div>
      )
    }
    const MockComponentWithNavigation = withNavigation(MockWrappedComponent);
    const wrapper :ReactWrapper = mount(<MockComponentWithNavigation stagesLength={3}/>);   
    const instance :any = wrapper.instance();    

    it('moveToNext increments currentId',() => {
      expect(instance.state.currentId).toEqual(1);
      instance.moveToNext(1);
      expect(instance.state.currentId).toEqual(2);
    });
});
