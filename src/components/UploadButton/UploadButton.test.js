import { render, screen } from '@testing-library/react';
import UploadButton from './UploadButton';

test('renders "Upload file" button', () => {
  render(<UploadButton>Hello world! 😇</UploadButton>);
  const button = screen.getByTestId('upload-button')
  const input = screen.getByTestId('upload-input');
  expect(button.innerHTML).toBe('Hello world! 😇');
  expect(input).not.toBe(null);
});