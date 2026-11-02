import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ConversionTracking from './ConversionTracking';

afterEach(() => {
  delete window.gtag;
});

describe('ConversionTracking', () => {
  it('reports outbound scheduling and contact actions to Google Analytics', () => {
    window.gtag = vi.fn();
    render(
      <>
        <ConversionTracking />
        <a
          href="https://care.headway.co/providers/shaik-lamisa"
          onClick={(event) => event.preventDefault()}
        >
          Schedule
        </a>
        <a href="https://wa.me/13479018676" onClick={(event) => event.preventDefault()}>
          WhatsApp
        </a>
      </>,
    );

    fireEvent.click(screen.getByRole('link', { name: 'Schedule' }));
    fireEvent.click(screen.getByRole('link', { name: 'WhatsApp' }));

    expect(window.gtag).toHaveBeenCalledWith('event', 'contact_action', {
      contact_method: 'headway',
      page_path: '/',
    });
    expect(window.gtag).toHaveBeenCalledWith('event', 'contact_action', {
      contact_method: 'whatsapp',
      page_path: '/',
    });
  });

  it('reports preparation of the email intake form', () => {
    window.gtag = vi.fn();
    render(
      <>
        <ConversionTracking />
        <form className="intakeForm" aria-label="Intake form">
          <button type="submit">Prepare</button>
        </form>
      </>,
    );

    fireEvent.submit(screen.getByRole('form', { name: 'Intake form' }));

    expect(window.gtag).toHaveBeenCalledWith('event', 'contact_action', {
      contact_method: 'email_intake',
      page_path: '/',
    });
  });

  it('classifies every contact link and ignores unrelated interactions', () => {
    window.gtag = vi.fn();
    render(
      <>
        <ConversionTracking />
        <a href="mailto:hello@example.com" onClick={(event) => event.preventDefault()}>
          Email
        </a>
        <a href="tel:13479018676" onClick={(event) => event.preventDefault()}>
          Phone
        </a>
        <a href="/intake" onClick={(event) => event.preventDefault()}>
          Intake
        </a>
        <a href="/about" onClick={(event) => event.preventDefault()}>
          About
        </a>
        <button type="button">No link</button>
        <form aria-label="Untracked form">
          <button type="submit">Submit other form</button>
        </form>
      </>,
    );

    for (const name of ['Email', 'Phone', 'Intake', 'About', 'No link']) {
      fireEvent.click(screen.getByRole(name === 'No link' ? 'button' : 'link', { name }));
    }
    fireEvent.submit(screen.getByRole('form', { name: 'Untracked form' }));

    expect(window.gtag).toHaveBeenCalledTimes(3);
    expect(window.gtag).toHaveBeenCalledWith('event', 'contact_action', {
      contact_method: 'email',
      page_path: '/',
    });
    expect(window.gtag).toHaveBeenCalledWith('event', 'contact_action', {
      contact_method: 'phone',
      page_path: '/',
    });
    expect(window.gtag).toHaveBeenCalledWith('event', 'contact_action', {
      contact_method: 'intake',
      page_path: '/',
    });
  });

  it('does not require Google Analytics to be available', () => {
    render(
      <>
        <ConversionTracking />
        <a href="mailto:hello@example.com" onClick={(event) => event.preventDefault()}>
          Email without analytics
        </a>
      </>,
    );

    expect(() =>
      fireEvent.click(screen.getByRole('link', { name: 'Email without analytics' })),
    ).not.toThrow();
  });
});
