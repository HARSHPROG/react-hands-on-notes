import { render, screen, fireEvent } from '@testing-library/react';
import FunctionalTest from './functionalTest';

test('renders learn react link', () => {
    const { queryByText } = render(<FunctionalTest />);
    const hiElement = queryByText(/hi/i);
    expect(hiElement).toBeInTheDocument();

  const toogleText = queryByText(/toggle/i);
  expect(toogleText).not.toBeInTheDocument;
});

test("test button click", () => {
    render(<FunctionalTest />);
    const toggle = screen.getByRole('button');
    fireEvent.click(toggle);

    const toogleText = screen.getByText(/toggle/i);
    expect(toogleText).toBeInTheDocument();
    // await user.click(toggle)
})
