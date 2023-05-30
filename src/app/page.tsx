import Additional from './components/Additional';
import Advantages from './components/Advantages';
import Popular from './components/Popular';
import Slider from './components/Slider';

export const metadata = {
  title: 'Истра Лес - Качественные пиломатериалы по доступным ценам!',
};

export default function Home() {
  return (
    <main className="container mx-auto my-10 min-h-[350px]">
      <h1 className="sr-only">Истра Лес - Качественные пиломатериалы по доступным ценам!</h1>
      <Slider />
      <Advantages />
      <Popular />
      <Additional />
    </main>
  );
}
