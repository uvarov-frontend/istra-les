'use client';

import { ReCaptchaProvider } from 'next-recaptcha-v3';

export default function ReCaptchaProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      {children}
    </ReCaptchaProvider>
  );
}
