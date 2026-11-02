export function buildIntakeEmailUrl({ firstName, lastName, email, subject, message }, recipient) {
  const body = [
    `First name: ${firstName}`,
    `Last name: ${lastName}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
    '',
    '--sent via kindmindcounseling',
  ].join('\n');

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
