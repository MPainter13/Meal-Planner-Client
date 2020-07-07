import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Meal from './Meal';

it('renders the meal page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter initialEntries={['/home']}><Meal /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });