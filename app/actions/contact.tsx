// app/actions/contact.ts
'use server'

import { Resend } from 'resend'
import { contactSchema, type ContactValues } from '@/lib/contact-schema'
import ContactNotificationEmail from '@/components/emails/contact-notification'

type Result = { ok: true } | { ok: false; error: string }

const FALLBACK = 'Could not send your message. Please email me directly.'

export async function sendContactMessage(input: ContactValues): Promise<Result> {
  // Never trust the client: validate again on the server.
  const parsed = contactSchema.safeParse(input)
  if (!parsed.success) return { ok: false, error: 'Please check the form and try again.' }

  const { name, email, message, website } = parsed.data

  // Honeypot filled in: pretend it worked so bots learn nothing.
  if (website) return { ok: true }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_CONTACT_FROM ?? process.env.RESEND_FROM_EMAIL // e.g. 'Portfolio <contact@yourdomain.com>' (verified domain)
  const to = process.env.RESEND_CONTACT_TO // the inbox that should receive messages
  if (!apiKey || !from || !to) {
    console.error('Contact form: RESEND_API_KEY, CONTACT_FROM or CONTACT_TO is not set', { apiKey: !!apiKey, from, to })
    return { ok: false, error: FALLBACK }
  }

  // Created inside the function so a missing key can't break the build at import time.
  const resend = new Resend(apiKey)

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email, // `reply_to` on older versions of the resend package
      // Strip line breaks so a name can't inject extra email headers.
      subject: `New message from ${name.replace(/[\r\n]+/g, ' ')}`,
      react: <ContactNotificationEmail name={name} email={email} message={message} receivedAt={new Date().toISOString()} />,
    })

    if (error) {
      console.error('Contact form: Resend error', error)
      return { ok: false, error: FALLBACK }
    }
    // console.log('[Contact Form] Resend delivery succeeded. Email ID:', data?.id)
    return { ok: true }
  } catch (err) {
    console.error('Contact form: send failed', err)
    return { ok: false, error: FALLBACK }
  }
}
