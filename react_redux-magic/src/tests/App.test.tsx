import React from 'react';
import { screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App/App';
import { renderWithRedux } from './utils';

describe('Header in App', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    renderWithRedux(
      <Router history={history}>
        <App />
      </Router>,
    );
  });

  it('Header exists', () => {
    expect(screen.getByRole(/banner/i)).toBeInTheDocument();
  });
  it('Links to routes', () => {
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
    const leftClick = { button: 0 };

    userEvents.click(links[1], leftClick);
    expect(screen.getByText(/Welcome to Magic The Gathering Search!/i)).toBeInTheDocument();

    userEvents.click(links[0], leftClick);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
