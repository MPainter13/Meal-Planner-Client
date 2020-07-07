import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddForm from './AddForm';

it('renders the add form page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><AddForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });