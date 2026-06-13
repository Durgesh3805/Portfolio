// app/api/contact/route.js

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

// Allowed origins — matches the CORS policy in next.config.mjs
const ALLOWED_ORIGINS = [
  'https://durgeshap.dev',
  'https://www.durgeshap.dev',
  'https://durgeshap.vercel.app',
];

// Sanitize user input — escape HTML entities to prevent XSS/HTML injection in email
function sanitizeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const noCacheHeaders = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, private',
  'Pragma': 'no-cache',
};

export async function POST(req) {
  // CORS origin check — belt-and-suspenders beyond header-level policy
  const origin = req.headers.get('origin') || '';
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json(
      { error: 'Forbidden' },
      { status: 403, headers: noCacheHeaders }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400, headers: noCacheHeaders }
    );
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400, headers: noCacheHeaders }
    );
  }

  // Input length limits — prevent DoS via oversized payloads
  if (name.length > 100 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: 'Input exceeds maximum allowed length.' },
      { status: 400, headers: noCacheHeaders }
    );
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: 'Invalid email address.' },
      { status: 400, headers: noCacheHeaders }
    );
  }

  // Sanitize all user inputs before embedding in HTML
  const safeName = sanitizeHtml(name);
  const safeEmail = sanitizeHtml(email);
  const safeSubject = sanitizeHtml(subject);
  const safeMessage = sanitizeHtml(message).replace(/\n/g, '<br>');

  try {
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New Message from ${safeName}: ${safeSubject}`,
      reply_to: safeEmail,
      html: `
        <p>You have a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      // Do not expose internal error details to the client
      return NextResponse.json(
        { error: 'Error sending message.' },
        { status: 500, headers: noCacheHeaders }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200, headers: noCacheHeaders }
    );
  } catch {
    // Never expose stack traces or internal errors to the client
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500, headers: noCacheHeaders }
    );
  }
}