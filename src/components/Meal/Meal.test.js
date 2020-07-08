import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Meal from './Meal';

it('renders the meal page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Meal match={{params: {id: 1}}} /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });