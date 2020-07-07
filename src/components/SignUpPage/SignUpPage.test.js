import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUpPage from './SignUpPage';

it('renders the sign up page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><SignUpPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });