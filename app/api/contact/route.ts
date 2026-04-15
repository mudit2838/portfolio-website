import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Configure transporter — set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local
    // For Gmail: use App Password (https://myaccount.google.com/apppasswords)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'Muditchauhan28@gmail.com',
      replyTo: email,
      subject: `New message from ${name} via Portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#0f0f1c;color:#f0eeff;padding:32px;border-radius:12px;border:1px solid #1e1b4b;">
          <h2 style="color:#a78bfa;margin-bottom:24px;">📬 New Portfolio Message</h2>
          <p><strong style="color:#c4b5fd;">Name:</strong> ${name}</p>
          <p style="margin-top:12px;"><strong style="color:#c4b5fd;">Email:</strong> ${email}</p>
          <p style="margin-top:12px;"><strong style="color:#c4b5fd;">Message:</strong></p>
          <p style="margin-top:8px;background:#13132a;padding:16px;border-radius:8px;line-height:1.6;">${message.replace(/\n/g, '<br/>')}</p>
          <hr style="border-color:#1e1b4b;margin-top:24px;" />
          <p style="color:#6b6899;font-size:12px;margin-top:12px;">Sent via Mudit Kumar Portfolio Contact Form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('[Contact API Error]', err);
    // Return success even if email fails in dev (SMTP not configured)
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json({ success: true, message: 'Dev mode: message logged.' });
    }
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
