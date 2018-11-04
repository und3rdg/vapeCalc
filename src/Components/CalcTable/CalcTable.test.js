import React from 'react';
import ReactDOM from 'react-dom';
import CalcTable from './CalcTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalcTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
