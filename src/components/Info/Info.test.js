import { render, screen } from '@testing-library/react';
import Info from './Info';

test('renders "Upload file" button', () => {
  render(<Info>Hello world! 😇</Info>);
  const element = screen.getByTestId('info-container')
  expect(element.innerHTML).toBe('Hello world! 😇');
});