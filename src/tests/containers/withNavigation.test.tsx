import * as React from 'react';
import { mount, ReactWrapper} from 'enzyme';
import { withNavigation } from '../../containers/withNavigation';
import { NavigationProps } from '../../components/props.types';
import '../../setupTests';

describe('NavigableStepsList', () => {
    let wrapper: ReactWrapper;
    const MockWrappedComponent = (props: NavigationProps) => {
      const onClickHandler = () => {
        if (props.moveToNext) {
          props.moveToNext();
        }
      }
      return (
        <div className="link" onClick={onClickHandler}>
          {props.openAtIndex}
        </div>
      )
    }

    beforeEach(() => {
      const MockComponentWithNavigation = withNavigation(MockWrappedComponent);
      wrapper = mount(<MockComponentWithNavigation />)
    })

    it('moveToNextStep increments openAtIndex when called', () => {
      const clickEvent = {};
      const link = wrapper.find('.link');
      expect(link.text()).toEqual("1");
      link.simulate('click', clickEvent);
      expect(link.text()).toEqual("2");
    });
});
