/**
 * Email helper: opens Gmail compose in a new tab and falls back to mailto.
 * Usage: import { openComposeEmail } and call on button click.
 */
export function openComposeEmail(email: string, subject?: string, body?: string) {
  const params = new URLSearchParams()
  if (subject) params.set('su', subject)
  if (body) params.set('body', body)

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}${params.toString() ? '&' + params.toString() : ''}`

  const opened = window.open(gmailUrl, '_blank')
  if (!opened) {
    const mailto = `mailto:${encodeURIComponent(email)}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}${
      body ? `${subject ? '&' : '?'}body=${encodeURIComponent(body)}` : ''
    }`
    window.location.href = mailto
  }
}

export default openComposeEmail
