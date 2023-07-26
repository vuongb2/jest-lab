import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test ('Render basic page components', () => {
  render(<App />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

// Class example
test('renders learn react link', () => {
  render(<App />);

userEvent.click(screen.getByTestId("checkbox"));
expect(screen.getByTestId("checkbox")).toBeChecked()
});

// My example
test("If a button is clickable", () => {
  render(<App />);
  screen.debug();
  const button = screen.getByRole('button');
  userEvent.click(button);
});