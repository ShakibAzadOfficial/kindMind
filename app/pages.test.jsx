import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import AboutPage from './about/page';
import BrooklynTherapyPage from './bengali-therapist-brooklyn-ny/page';
import NewJerseyTherapyPage from './bengali-therapist-new-jersey/page';
import InsuranceFeesPage from './insurance-fees/page';
import IntakePage, { prepareIntakeEmail } from './intake/page';
import HomePage from './page';
import ServicesPage from './services/page';

describe('public pages', () => {
  it('renders the homepage conversion paths and descriptive location links', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Bilingual Bengali and English therapy in New York and New Jersey',
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Schedule a consult/i })).toHaveAttribute(
      'href',
      'https://simplepractice.com',
    );
    expect(screen.getByRole('link', { name: /Bengali therapist in Brooklyn/i })).toHaveAttribute(
      'href',
      '/bengali-therapist-brooklyn-ny',
    );
    expect(screen.getByRole('link', { name: /Bengali therapist in New Jersey/i })).toHaveAttribute(
      'href',
      '/bengali-therapist-new-jersey',
    );
    expect(screen.getByRole('link', { name: /Insurance and fees details/i })).toHaveAttribute(
      'href',
      '/insurance-fees',
    );
  });

  it('renders detailed expectations and résumé-backed authority on the About page', () => {
    render(<AboutPage />);

    const expectations = screen
      .getByRole('heading', { name: 'What clients can expect from me' })
      .closest('.panel');

    expect(expectations).not.toBeNull();
    expect(within(expectations).getAllByRole('article')).toHaveLength(6);
    expect(
      within(expectations).getByRole('heading', { name: 'A collaborative pace' }),
    ).toBeVisible();
    expect(
      within(expectations).getByRole('heading', { name: 'Bilingual flexibility' }),
    ).toBeVisible();
    expect(screen.getByText(/Master of Arts in Mental Health Counseling/)).toBeVisible();
    expect(screen.getByText(/Brooklyn Total Wellness/)).toBeVisible();
  });

  it('renders Brooklyn-specific content without claiming an in-person office', () => {
    render(<BrooklynTherapyPage />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Bengali and English therapy in New York',
      }),
    ).toBeVisible();
    expect(
      screen.getByText(/KindMind Counseling currently describes its services as virtual/),
    ).toBeVisible();
    expect(screen.getByRole('link', { name: /Review insurance and fees/i })).toHaveAttribute(
      'href',
      '/insurance-fees',
    );
  });

  it('connects the New Jersey page to Brooklyn and intake resources', () => {
    render(<NewJerseyTherapyPage />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Bengali and English therapy in New Jersey' }),
    ).toBeVisible();
    expect(
      screen.getByRole('link', { name: /Explore therapy for New York clients/i }),
    ).toHaveAttribute('href', '/bengali-therapist-brooklyn-ny');
    expect(screen.getByRole('link', { name: /Request an intake screening/i })).toHaveAttribute(
      'href',
      '/intake',
    );
  });

  it('renders every core service and its intake path', () => {
    render(<ServicesPage />);

    for (const service of [
      'Anxiety therapy',
      'ADHD support',
      'Stress and burnout therapy',
      'Relationship and family therapy',
      'Cultural identity and intergenerational pressure',
      'Life transitions and coping skills',
    ]) {
      expect(screen.getByRole('heading', { name: service })).toBeVisible();
    }

    expect(screen.getByRole('link', { name: /Request an intake screening/i })).toHaveAttribute(
      'href',
      '/intake',
    );
  });

  it('renders insurance guidance without guaranteeing coverage', () => {
    render(<InsuranceFeesPage />);

    expect(screen.getByText('Aetna')).toBeVisible();
    expect(screen.getByText('UnitedHealthcare / UHC | UBH')).toBeVisible();
    expect(
      screen.getByText(/does not guarantee that a particular service will be covered/i),
    ).toBeVisible();
    expect(screen.getByRole('link', { name: /Request an intake screening/i })).toHaveAttribute(
      'href',
      '/intake',
    );
  });
});

describe('intake page', () => {
  it('requires the expected contact fields and privacy acknowledgement', () => {
    render(<IntakePage />);

    expect(screen.getByLabelText('First name')).toBeRequired();
    expect(screen.getByLabelText('Last name')).toBeRequired();
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText('Subject')).toBeRequired();
    expect(screen.getByLabelText('Message')).toBeRequired();
    expect(screen.getByRole('checkbox')).toBeRequired();
    expect(screen.getByText(/Email may not be secure/)).toBeVisible();
    expect(screen.getByRole('button', { name: /Prepare email/i })).toBeEnabled();
  });

  it('prepares a complete email from the submitted form values', () => {
    render(<IntakePage />);

    fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'Amina' } });
    fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Rahman' } });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'amina@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Availability' } });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Please share the next steps.' },
    });

    const form = screen.getByRole('button', { name: /Prepare email/i }).closest('form');
    const preventDefault = vi.fn();
    const navigate = vi.fn();

    prepareIntakeEmail({ preventDefault, currentTarget: form }, navigate);

    expect(preventDefault).toHaveBeenCalledOnce();
    expect(navigate).toHaveBeenCalledOnce();
    const preparedUrl = new URL(navigate.mock.calls[0][0]);
    expect(preparedUrl.protocol).toBe('mailto:');
    expect(preparedUrl.searchParams.get('subject')).toBe('Availability');
    expect(preparedUrl.searchParams.get('body')).toContain('First name: Amina');
    expect(preparedUrl.searchParams.get('body')).toContain('Please share the next steps.');
  });

  it('hands a submitted intake request to the browser email client', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<IntakePage />);

    const form = screen.getByRole('button', { name: /Prepare email/i }).closest('form');
    fireEvent.submit(form);

    expect(consoleError).toHaveBeenCalled();
    consoleError.mockRestore();
  });
});
