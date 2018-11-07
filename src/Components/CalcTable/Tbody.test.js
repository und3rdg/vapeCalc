import React from 'react';
import ReactDOM from 'react-dom';
import Tbody from './Tbody';

// fake data
const f = {
  base: [
    { name: 'Nicotine' , ml: 0, gr: 0, percent: 7  , type:''},
    { name: 'PG'       , ml: 0, gr: 0, percent: 23 , type:''},
    { name: 'VG'       , ml: 0, gr: 0, percent: 60 , type:''},
  ],
  baseTotal: {ml:0, gr:0, percent:0}
}

it('renders without crashing', () => {
  const table = document.createElement('table');
  ReactDOM.render(
    <Tbody
      base={f.base}
      baseTotal={f.baseTotal}
    />, table);
  ReactDOM.unmountComponentAtNode(table);
});
