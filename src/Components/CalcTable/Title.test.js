import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';

// fake data
const f = {
  recipeName: 'Recipe name'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Title
      recipeName={f.recipeName}
    /> , div);
  ReactDOM.unmountComponentAtNode(div);
});
