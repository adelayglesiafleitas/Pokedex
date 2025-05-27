import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';

test('renders greeting', () => {
    render(<Hello name="Alejandro" />);
    expect(screen.getByText(/hello, alejandro/i)).toBeInTheDocument();
});
