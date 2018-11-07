import React from 'react';
import ReactDOM from 'react-dom';
import Tbody from './Tbody';

const base = [
  { name: 'Nicotine' , ml: 0, gr: 0, percent: 7  , type:''},
  { name: 'PG'       , ml: 0, gr: 0, percent: 23 , type:''},
  { name: 'VG'       , ml: 0, gr: 0, percent: 60 , type:''},
]

it('renders without crashing', () => {
  const table = document.createElement('table');
  ReactDOM.render(<Tbody base={base}/>, table);
  ReactDOM.unmountComponentAtNode(table);
});
