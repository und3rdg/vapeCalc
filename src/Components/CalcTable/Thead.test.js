import React from 'react';
import ReactDOM from 'react-dom';
import Thead from './Thead';

const titles = [ 'Ingredient', 'Millilitre', 'Gram', 'Percent' ]

it('renders without crashing', () => {
  const table = document.createElement('table');
  ReactDOM.render(<Thead titles={titles}/>, table);
  ReactDOM.unmountComponentAtNode(table);
});
