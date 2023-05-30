/* eslint-disable sort-keys */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const slides = [
  {
    id: 0,
    title: 'Рейка, брусок',
    src: '/img/slider/13.jpg',
    link: '#',
  },
  {
    id: 1,
    title: 'Брусок обрезной',
    src: '/img/slider/14.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Половая доска',
    src: '/img/slider/15.jpg',
    link: '#',
  },
];

export default function Slider() {
  const [activeIDSlide, setActiveIDSlide] = useState(slides[0].id);

  const prevSlide = () => {
    if (activeIDSlide === slides[0].id) {
      setActiveIDSlide(slides[slides.length - 1].id);
    } else {
      setActiveIDSlide(activeIDSlide - 1);
    }
  };

  const nextSlide = () => {
    if (activeIDSlide === (slides.length - 1)) {
      setActiveIDSlide(slides[0].id);
    } else {
      setActiveIDSlide(activeIDSlide + 1);
    }
  };

  return (
    <div className="relative w-full bg-lite h-[300px] rounded-xl overflow-hidden">
      <div className="slides">
        {slides.map((slide) => (
          <Link key={slide.id}
            className="block"
            href={slide.link}>
            <Image alt={slide.title}
              className={`transition-opacity ${slide.id === activeIDSlide ? 'relative opacity-100' : 'absolute opacity-0'}`}
              height={300}
              src={slide.src}
              width={1220} />
          </Link>
        ))}
      </div>
      <div className="text-none absolute right-8 top-8 pointer-events-none grid grid-flow-col gap-2">
        {slides.map((slide) => (
          <button key={slide.id}
            className={`pointer-events-auto w-3 h-3 rounded-full border-white border-2 ${slide.id === activeIDSlide ? 'bg-green' : 'bg-white'}`}
            type="button"
            onClick={() => setActiveIDSlide(slide.id)}>{slide.id}</button>
        ))}
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
        <button className="absolute pointer-events-auto right-[70px] bottom-8 rotate-180 w-8 h-8 rounded-full bg-green hover:bg-green_hover"
          type="button"
          onClick={prevSlide}>
          <span className="absolute text-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white icon-arrowhead">Назад</span>
        </button>
        <button className="absolute pointer-events-auto text-none right-[30px] bottom-8 w-8 h-8 rounded-full bg-green hover:bg-green_hover"
          type="button"
          onClick={nextSlide}>
          <span className="absolute text-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white icon-arrowhead">Вперед</span>
        </button>
      </div>
    </div>
  );
}
