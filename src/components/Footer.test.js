import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Footer test', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/us/i);
  expect(linkElement).toBeInTheDocument();
});
