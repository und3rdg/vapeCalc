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
  baseTotal: {ml:0, gr:0, percent:0},
  flavour: [
    { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
  ],
  flavourTotal: {ml:0, gr:0, percent:0},
}

it('renders without crashing', () => {
  const table = document.createElement('table');
  ReactDOM.render(
    <Tbody
      total={f.total}
      base={f.base}
      baseTotal={f.baseTotal}
      flavour={f.flavour}
      flavourTotal={f.flavourTotal}
    />, table);
  ReactDOM.unmountComponentAtNode(table);
});
