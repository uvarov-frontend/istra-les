import Image from 'next/image';

import BreadCrumbs from '@/components/BreadCrumbs';
import { ILink } from '@/types';

import Advantages from '../components/Advantages';

const links: ILink[] = [
  {
    id: 0,
    title: 'Главная',
    href: '/',
  },
  {
    id: 1,
    title: 'О компании',
    href: false,
  },
];

export const metadata = {
  description: 'Истра Лес изготавливает и продает пиломатериалы в розницу и опт. В Москве и Московской области, розничные точки находятся в Истре и Истринском районе.',
  title: 'О компании | Истра Лес',
};

export default function About() {
  return (
    <main className="container mx-auto my-10 min-h-[350px]">
      <BreadCrumbs links={links} />
      <section className="grid grid-cols-2 gap-14">
        <div className="content">
          <h1 className="text-3xl font-bold mb-6">О компании</h1>
          <p><strong>Мы изготавливаем и продаем высококачественные пиломатериалы из хвойных пород дерева.</strong> У нас в каталоге Вы найдете все для строительства и отделки домов, бань и саун — вагонку, блок-хаус, доски для пола, имитацию бруса и другое.</p>
          <p>Наши возможности позволяют доставлять в срок все необходимые пиломатериалы не только зимой, но и в период летнего строительного сезона. Многие заказчики, среди которых строительные компании, а так же частные лица, оценили преимущества работы с нами. Благодаря оптимальной системе поставок, полноценной информационной поддержке, конкурентоспособным ценам, высококвалифицированной и доброжелательной работы наших сотрудников.</p>
          <p>Одно из главных преимуществ и методов работы — идти навстречу своим постоянным и потенциальным клиентам! Если Вы станете нашим постоянным клиентом, <strong>Вы сможете рассчитывать на выгодные условия</strong> приобретения нашего продукта, <strong>получив дополнительные скидки</strong> либо льготные условия платежа.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Image alt="about" className="rounded-xl" height={250} src="/img/about/1.jpg" width={275} />
          <Image alt="about" className="rounded-xl" height={250} src="/img/about/2.jpg" width={275} />
          <Image alt="about" className="rounded-xl col-span-2" height={180} src="/img/about/3.jpg" width={580} />
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-2xl font-bold">Наши преимущества</h2>
        <Advantages />
      </section>
    </main>
  );
}
