import React from 'react';
import ReactDOM from 'react-dom';
import UserInput from './UserInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
