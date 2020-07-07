import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

it('renders the home page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><HomePage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });