import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ttnorms } from '@/fonts';

import ReCaptchaProviders from './ReCaptchaProviders';

import './globals.css';

export const metadata = {
  icons: '/favicon.svg',
  keywords:
    'продажа пиломатериалов, купить пиломатериалы цена, пиломатериалы купить в москве, пиломатериалы область купить, цена куба пиломатериалов, пиломатериалы в москве и области, пиломатериалы с доставкой, пиломатериалы недорого, сайт пиломатериалов, купить пиломатериал недорого, пиломатериалы в москве и московской области, пиломатериалы от производителя в московской области, купить пиломатериал в московской области',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReCaptchaProviders>
      <html lang="ru">
        <body className={`${ttnorms.className} grid min-h-screen grid-rows-[auto_auto_1fr_auto] text-dark pt-[70px] md:pt-0`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ReCaptchaProviders>
  );
}
