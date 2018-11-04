import React from 'react';
import ReactDOM from 'react-dom';
import Thead from './Thead';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Thead />, div);
  ReactDOM.unmountComponentAtNode(div);
});
