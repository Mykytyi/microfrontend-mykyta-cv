import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/app/App';

test('Renders pre-load page', () => {
  render(<App />);
  const preLoad = screen.getByText(/Mykyta is thinking/i);
  expect(preLoad).toBeInTheDocument();
});
