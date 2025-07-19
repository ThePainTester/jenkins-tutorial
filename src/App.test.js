import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jenkins Demo App and version', () => {
  render(<App />);

  // Check if the header text is present
  expect(screen.getByText(/Jenkins Demo App/i)).toBeInTheDocument();

  // Check if the version text is present
  expect(screen.getByText(/Application version: 1/i)).toBeInTheDocument();
});
