import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count').textContent).toEqual('0');
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count').textContent).toEqual('1');
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId('count').textContent).toEqual('-1');
});
