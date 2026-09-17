import { describe, expect, it } from 'vitest';
import { buildIntakeEmailUrl } from './intake-email';

describe('buildIntakeEmailUrl', () => {
  it('creates an encoded email draft containing every intake field', () => {
    const url = buildIntakeEmailUrl(
      {
        firstName: 'Amina',
        lastName: 'Rahman',
        email: 'amina@example.com',
        subject: 'Initial consultation & availability',
        message: 'I would like to learn more about scheduling.',
      },
      'shaiklamisa00@gmail.com',
    );

    const parsed = new URL(url);

    expect(parsed.protocol).toBe('mailto:');
    expect(parsed.pathname).toBe('shaiklamisa00@gmail.com');
    expect(parsed.searchParams.get('subject')).toBe('Initial consultation & availability');
    expect(parsed.searchParams.get('body')).toContain('First name: Amina');
    expect(parsed.searchParams.get('body')).toContain('Last name: Rahman');
    expect(parsed.searchParams.get('body')).toContain('Email: amina@example.com');
    expect(parsed.searchParams.get('body')).toContain(
      'Message:\nI would like to learn more about scheduling.',
    );
  });
});
