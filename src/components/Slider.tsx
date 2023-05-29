import Image from 'next/image';

export default function Slider() {
  return (
    <div className="relative w-full bg-lite h-[300px] rounded-xl overflow-hidden">
      <Image alt="slide" height={300} src="/img/slider/13.jpg" width={1220} />
      <div className="text-none absolute right-8 top-8 pointer-events-none grid grid-flow-col gap-2">
        <button className="pointer-events-auto w-3 h-3 bg-green rounded-full border-white border-2" type="button">1</button>
        <button className="pointer-events-auto w-3 h-3 bg-white rounded-full border-white border-2" type="button">2</button>
        <button className="pointer-events-auto w-3 h-3 bg-white rounded-full border-white border-2" type="button">3</button>
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
        <button className="absolute pointer-events-auto right-[70px] bottom-8 rotate-180 w-8 h-8 rounded-full bg-green hover:bg-green_hover" type="button">
          <span className="absolute text-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white icon-arrowhead">Назад</span>
        </button>
        <button className="absolute pointer-events-auto text-none right-[30px] bottom-8 w-8 h-8 rounded-full bg-green hover:bg-green_hover" type="button">
          <span className="absolute text-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white icon-arrowhead">Вперед</span>
        </button>
      </div>
    </div>
  );
}
