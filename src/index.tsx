import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styling/cjc-bootstrap-default.css';
import './styling/styles.scss';
import { App } from './App';

export { Preamble } from './components/Preamble';

ReactDOM.render(
    <App />,
    document.getElementById('homepage')
);
