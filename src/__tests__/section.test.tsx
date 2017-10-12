import * as React from 'react';
import { shallow } from 'enzyme';
import Section from '../components/Section';

import '../setupTests';

it('renders without crashing', () => {
  shallow(<Section />);
});