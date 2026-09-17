import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.dataset.theme = 'light';
    localStorage.clear();
  });

  it('switches between dark and light mode and saves the preference', () => {
    render(<ThemeToggle />);

    const toggle = screen.getByRole('button', { name: 'Switch to dark mode' });
    fireEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('kindmind-theme')).toBe('dark');
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );

    fireEvent.click(screen.getByRole('button', { name: 'Switch to light mode' }));

    expect(document.documentElement.dataset.theme).toBe('light');
    expect(localStorage.getItem('kindmind-theme')).toBe('light');
  });
});
