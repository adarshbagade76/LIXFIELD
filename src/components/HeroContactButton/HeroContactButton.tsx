/**
 * Email helper: opens Gmail compose in a new tab and falls back to mailto.
 * Usage: import { openComposeEmail } and call on button click.
 */
export function openComposeEmail(  email: string,
  subject: string = ' Enquiry Regarding Products', // default subject
  body: string = `Hi,

I would like to get in touch regarding international trade services.

Regards,
[Your Name]

Thank you.`,
) {
  const params = new URLSearchParams()
  // Standard Gmail compose params: view=cm, fs=1 (fullscreen), tf=1 (use compose dialog)
  params.set('view', 'cm')
  params.set('fs', '1')
  params.set('tf', '1')
  if (email) params.set('to', email)
  if (subject) params.set('su', subject)
  if (body) params.set('body', body)

  const gmailUrl = `https://mail.google.com/mail/?${params.toString()}`

  const opened = window.open(gmailUrl, 'LEts connect')
  if (!opened) {
    const mailtoParams: string[] = []
    if (subject) mailtoParams.push(`subject=${encodeURIComponent(subject)}`)
    if (body) mailtoParams.push(`body=${encodeURIComponent(body)}`)
    const mailto = `mailto:${encodeURIComponent(email)}${mailtoParams.length ? '?' + mailtoParams.join('&') : ''}`
    window.location.href = mailto
  }
}

export default openComposeEmail
