import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ModalCallback from '@/components/ModalCallback';
import { ttnorms } from '@/fonts';
import translation from '@/translation.yaml';

import ReCaptchaProviders from './ReCaptchaProviders';

import './globals.css';

export async function generateMetadata() {
  const { keywords } = translation;

  return {
    icons: '/favicon.svg',
    keywords,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { info } = translation;

  return (
    <ReCaptchaProviders>
      <html lang="ru">
        <body className={`${ttnorms.className} grid min-h-screen grid-rows-[auto_auto_1fr_auto] pt-[70px] text-dark md:pt-0`}>
          {/* @ts-expect-error Server Component */}
          <Header />
          {children}
          {/* @ts-expect-error Server Component */}
          <Footer />
          <ModalCallback callback={info.callback} />
        </body>
      </html>
    </ReCaptchaProviders>
  );
}
