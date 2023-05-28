import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ttnorms } from '@/fonts';

import './globals.css';

export const metadata = {
  icons: '/favicon.svg',
  keywords: 'продажа пиломатериалов, купить пиломатериалы цена, пиломатериалы купить в москве, пиломатериалы область купить, цена куба пиломатериалов, пиломатериалы в москве и области, пиломатериалы с доставкой, пиломатериалы недорого, сайт пиломатериалов, купить пиломатериал недорого, пиломатериалы в москве и московской области, пиломатериалы от производителя в московской области, купить пиломатериал в московской области',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${ttnorms.className} text-dark`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
