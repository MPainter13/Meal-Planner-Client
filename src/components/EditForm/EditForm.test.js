import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditForm from './EditForm';

it('renders the edit form page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><EditForm match={{params: {id: 1}}}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });