
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Material UI Create React App example in TypeScript/i);
  expect(linkElement).toBeInTheDocument();
});
