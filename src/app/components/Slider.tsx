'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { IPromo } from '@/types';

export default function Slider({ host, promos }: { host: string, promos: IPromo[] }) {

  const [activeIDSlide, setActiveIDSlide] = useState(promos[0].id);
  const [handlerAutoplay, setHandlerAutoplay] = useState<undefined | ReturnType<typeof setTimeout>>(undefined);
  const [autoplay, setAutoplay] = useState(true);
  const timeout = 15;

  const prevSlide = () => {
    if (activeIDSlide === promos[0].id) {
      setActiveIDSlide(promos[promos.length - 1].id);
    } else {
      setActiveIDSlide(activeIDSlide - 1);
    }
  };

  const nextSlide = () => {
    if (activeIDSlide === (promos[promos.length - 1].id)) {
      setActiveIDSlide(promos[0].id);
    } else {
      setActiveIDSlide(activeIDSlide + 1);
    }
  };

  useEffect(() => {
    if (!autoplay && handlerAutoplay) {
      clearTimeout(handlerAutoplay);
    } else if (autoplay) {
      setHandlerAutoplay(setTimeout(nextSlide, timeout * 1000));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, activeIDSlide]);

  return (
    <div className="relative w-full bg-lite h-[300px] rounded-xl overflow-hidden">
      <div className="slides">
        {promos.map((promo) => (
          <Link key={promo.id}
            className="block"
            href={promo.attributes.link}>
            <Image alt={promo.attributes.title}
              className={`transition-opacity ${promo.id === activeIDSlide ? 'relative opacity-100' : 'absolute opacity-0'}`}
              height={300}
              src={`${host}${promo.attributes.img.data.attributes.url}`}
              width={1220} />
          </Link>
        ))}
      </div>
      <div className="text-none absolute right-8 top-8 pointer-events-none grid grid-flow-col gap-2">
        {promos.map((promo) => (
          <button key={promo.id}
            className={`pointer-events-auto w-3 h-3 rounded-full border-white border-2 ${promo.id === activeIDSlide ? 'bg-green' : 'bg-white'}`}
            type="button"
            onClick={() => {
              setActiveIDSlide(promo.id);
              setAutoplay(false);
            }}>{promo.id}</button>
        ))}
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
        <button className="absolute pointer-events-auto right-[70px] bottom-8 rotate-180 w-8 h-8 rounded-full bg-green hover:bg-green_hover"
          type="button"
          onClick={() => {
            prevSlide();
            setAutoplay(false);
          }}>
          <i className="absolute text-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white icon-arrowhead">Назад</i>
        </button>
        <button className="absolute pointer-events-auto text-none right-[30px] bottom-8 w-8 h-8 rounded-full bg-green hover:bg-green_hover"
          type="button"
          onClick={() => {
            nextSlide();
            setAutoplay(false);
          }}>
          <i className="absolute text-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white icon-arrowhead">Вперед</i>
        </button>
      </div>
    </div>
  );
}
