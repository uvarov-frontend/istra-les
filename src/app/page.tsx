import Slider from '@/components/Slider';

export const metadata = {
  title: 'Истра Лес - Качественные пиломатериалы по доступным ценам!',
};

export default function Home() {
  return (
    <main className="container mx-auto my-10 min-h-[350px]">
      <Slider />
    </main>
  );
}
