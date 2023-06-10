/* eslint-disable sort-keys */
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import translation from '@/translation.yaml';

const verifyRecaptcha = async (token: string) => {
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const body = await res.json();

  return body;
};

export async function POST(req: NextRequest) {
  const body: {token: string, data: {[key: string]: string}} = await req.json();
  const { info } = translation;

  const responseRecaptcha = await verifyRecaptcha(body.token);

  const mailOptions = {
    from: info.callbackMail.from,
    to: info.callbackMail.to,
    subject: info.callbackMail.title,
    html: `<strong>${info.callbackMail.name}</strong> ${body.data.name}<br /><strong>${info.callbackMail.phone}</strong> ${body.data.phone}`,
    auth: {
      user: info.callbackMail.from,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: process.env.GMAIL_ACCESS_TOKEN,
      expires: new Date().getTime(),
    },
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
    },
  });

  // eslint-disable-next-line no-console
  if (responseRecaptcha.success && responseRecaptcha.score >= 0.5) transporter.sendMail(mailOptions, (error) => error ? console.log(error) : null);
  return NextResponse.json({ response: body });
}
