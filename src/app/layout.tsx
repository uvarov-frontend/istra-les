import Script from 'next/script';

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
          <Script
            defer
            src="//code.jivo.ru/widget/5dswZerdPY"
            strategy="lazyOnload"

          />
          <script type="text/javascript" dangerouslySetInnerHTML={{
              __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(52988986, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });
              `,
            }} />
        </body>
      </html>
    </ReCaptchaProviders>
  );
}
