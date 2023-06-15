'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { IPromo, ITranslate } from '@/types';

export default function Slider({ info, host, promos }: { info: ITranslate; host: string; promos: IPromo[] }) {
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
    if (activeIDSlide === promos[promos.length - 1].id) {
      setActiveIDSlide(promos[0].id);
    } else {
      setActiveIDSlide(activeIDSlide + 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setAutoplay(false);
      nextSlide();
    },
    onSwipedRight: () => {
      setAutoplay(false);
      prevSlide();
    },
  });

  useEffect(() => {
    if (!autoplay && handlerAutoplay) {
      clearTimeout(handlerAutoplay);
    } else if (autoplay) {
      setHandlerAutoplay(setTimeout(nextSlide, timeout * 1000));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, activeIDSlide]);

  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-xl bg-lite lg:h-[300px]" {...handlers}>
      <div className="slides h-full w-full">
        {promos.map((promo) => (
          <Link
            key={promo.id}
            className={`left-0 top-0 block h-full w-full transition-opacity ${promo.id === activeIDSlide ? 'relative opacity-100 pointer-events-auto' : 'absolute opacity-0 pointer-events-none'}`}
            href={promo.attributes.link}
          >
            <Image
              alt={promo.attributes.title}
              className="h-full object-cover object-[-15px_0] xl:object-left"
              height={300}
              src={`${host}${promo.attributes.img.data.attributes.url}`}
              width={1196}
            />
          </Link>
        ))}
      </div>
      <div className="pointer-events-none absolute right-4 top-4 grid grid-flow-col gap-2 text-none lg:right-8 lg:top-8">
        {promos.map((promo) => (
          <button
            key={promo.id}
            className={`pointer-events-auto h-3 w-3 rounded-full border-2 border-white ${promo.id === activeIDSlide ? 'bg-green' : 'bg-white'}`}
            type="button"
            onClick={() => {
              setActiveIDSlide(promo.id);
              setAutoplay(false);
            }}
          >
            {promo.id}
          </button>
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 hidden md:block">
        <button
          className="pointer-events-auto absolute bottom-3 right-[55px] h-8 w-8 rotate-180 rounded-full bg-green hover:bg-green_hover lg:bottom-8 lg:right-[70px]"
          type="button"
          onClick={() => {
            prevSlide();
            setAutoplay(false);
          }}
        >
          <i className="icon-arrowhead absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 bg-white text-none">{info.prev}</i>
        </button>
        <button
          className="pointer-events-auto absolute bottom-3 right-[15px] h-8 w-8 rounded-full bg-green text-none hover:bg-green_hover lg:bottom-8 lg:right-[30px]"
          type="button"
          onClick={() => {
            nextSlide();
            setAutoplay(false);
          }}
        >
          <i className="icon-arrowhead absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 bg-white text-none">{info.next}</i>
        </button>
      </div>
    </div>
  );
}
