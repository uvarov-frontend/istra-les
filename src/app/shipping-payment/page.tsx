import Image from 'next/image';

import BreadCrumbs from '@/components/BreadCrumbs';
import { ILink } from '@/types';

const links: ILink[] = [
  {
    id: 0,
    title: 'Главная',
    href: '/',
  },
  {
    id: 1,
    title: 'Доставка и оплата',
    href: false,
  },
];

export const metadata = {
  description: 'Истра Лес изготавливает и продает пиломатериалы в розницу и опт. В Москве и Московской области, розничные точки находятся в Истре и Истринском районе.',
  title: 'Доставка и оплата | Истра Лес',
};

export default function ShippingPayment() {
  return (
    <main className="container mx-auto my-10 min-h-[350px]">
      <BreadCrumbs links={links} />
      <h1 className="text-3xl font-bold mb-8">Доставка и оплата</h1>
      <div className="grid grid-cols-2 gap-7">
        <div className="grid grid-cols-2 gap-7">
          <Image alt="shipping" className="rounded-xl" height={283} src="/img/shipping-payment/shipping.jpg" width={283} />
          <div className="content">
            <h2>Доставка</h2>
            <p>Мы осуществляем доставку пиломатериалов своим транспортом по Москве и Московской области. Вам достаточно просто позвонить и мы обязательно привезем Ваш заказ на указанный адрес.</p>
            <button className="flex items-center text-green hover:text-green_hover group" type="button">
              Узнать стоимость
              <i className="block min-w-[1.25rem] min-h-[1.25rem] w-5 h-5 ml-2 icon-arrowhead bg-green group-hover:text-green_hover" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <Image alt="shipping" className="rounded-xl" height={283} src="/img/shipping-payment/payment.jpg" width={283} />
          <div className="content">
            <h2>Оплата</h2>
            <p>Произвести оплату можно любым удобным для Вас способом:</p>
            <ul>
              <li>Наличный расчет при получении продукции;</li>
              <li>На расчетный счет компании;</li>
              <li>Банковской картой;</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
