import React from 'react';
import ReactDOM from 'react-dom';
import Section from '../components/Section';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Section />, div);
});
