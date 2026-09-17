import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SiteHeader from './SiteHeader';

describe('SiteHeader', () => {
  it('provides crawlable links to every primary section', () => {
    render(<SiteHeader subtitle="KindMind Counseling" />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About Lamisa' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services');

    fireEvent.click(screen.getByText('Locations'));

    expect(screen.getByRole('link', { name: 'Brooklyn, NY' })).toHaveAttribute(
      'href',
      '/bengali-therapist-brooklyn-ny',
    );
    expect(screen.getByRole('link', { name: 'West Orange, NJ' })).toHaveAttribute(
      'href',
      '/bengali-therapist-new-jersey',
    );
    expect(screen.getByRole('link', { name: 'Insurance & Fees' })).toHaveAttribute(
      'href',
      '/insurance-fees',
    );
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/intake');
  });
});
