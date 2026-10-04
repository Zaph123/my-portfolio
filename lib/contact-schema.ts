// lib/contact-schema.ts
// Shared by the form (client) and the server action. Kept out of the 'use server' file,
// because a server-actions file may only export async functions.
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name needs at least two characters.'),
  email: z.string().email('Enter a valid email.'),
  message: z
    .string()
    .min(10, 'Give me a little more context.')
    .max(1000, 'Keep it under 1000 characters.'),
  // Honeypot: real visitors never see or fill this. Bots usually do.
  website: z.string().optional(),
})

export type ContactValues = z.infer<typeof contactSchema>