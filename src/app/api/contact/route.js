import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ type: 'error', message: 'All fields are required.' }, { status: 400 });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars');
    return NextResponse.json(
      { type: 'error', message: 'Server configuration error. Please contact me directly at maxvmaasakker@gmail.com.' },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        // Strip all whitespace — Gmail app passwords sometimes arrive with spaces
        pass: process.env.GMAIL_APP_PASSWORD.replace(/\s/g, ''),
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  } catch (err) {
    console.error('Mail error:', err);
    return NextResponse.json(
      { type: 'error', message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ type: 'success', message: 'Message sent! I will get back to you soon.' });
}
