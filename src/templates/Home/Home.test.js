import { render, screen } from '@testing-library/react';
import Home from '.';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
