export function buildIntakeEmailUrl({ firstName, lastName, email, subject, message }, recipient) {
  const body = [
    `First name: ${firstName}`,
    `Last name: ${lastName}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
