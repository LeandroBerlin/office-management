import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';


test('render App title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Office Management/i);
  expect(linkElement).toBeInTheDocument();
});

