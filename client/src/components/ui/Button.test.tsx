import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
    it('renders correctly with given text', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('handles click events', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('shows loading state text and disables button when loading is true', () => {
        render(<Button loading={true}>Submit</Button>);
        const button = screen.getByRole('button');
        
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        expect(screen.queryByText('Submit')).not.toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    it('disables button when disabled prop is true', () => {
        render(<Button disabled={true}>Disabled</Button>);
        const button = screen.getByText('Disabled');
        expect(button).toBeDisabled();
    });

    it('applies correct class for primary variant', () => {
        render(<Button variant="primary">Primary</Button>);
        const button = screen.getByText('Primary');
        expect(button).toHaveClass('btn-primary');
    });

    it('applies correct class for outline variant', () => {
        render(<Button variant="outline">Outline</Button>);
        const button = screen.getByText('Outline');
        expect(button).toHaveClass('border-2');
    });
});
