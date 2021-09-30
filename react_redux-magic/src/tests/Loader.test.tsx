import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '../Loader/Loader';

test('Loader exsits', () => {
  render(<Loader />);
  expect(screen.getByAltText(/loader/i)).toBeInTheDocument();
});
