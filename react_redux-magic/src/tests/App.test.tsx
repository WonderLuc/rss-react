import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App/App';
import { renderWithRedux } from './utils';

describe('Header in App', () => {
  renderWithRedux(<App />);

  it('Header exists', () => {
    expect(screen.getByRole(/banner/i)).toBeInTheDocument();
  });
});
