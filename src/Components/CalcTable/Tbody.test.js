import React from 'react';
import ReactDOM from 'react-dom';
import Tbody from './Tbody';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tbody />, div);
  ReactDOM.unmountComponentAtNode(div);
});
