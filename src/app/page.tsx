import { notFound } from 'next/navigation';

import getPage from '@/fetching/getPage';

import Additional from './components/Additional';
import Advantages from './components/Advantages';
import Popular from './components/Popular';
import Slider from './components/Slider';

export async function generateMetadata() {
  const page = await getPage('home');
  if (!page) return notFound();

  return {
    description: page.attributes.description,
    title: page.attributes.title,
  };
}

export default async function Home() {
  const page = await getPage('home');
  if (!page) return notFound();

  return (
    <main className="container mx-auto my-10 min-h-[350px]">
      <h1 className="sr-only">{page.attributes.title}</h1>
      <Slider />
      <Advantages />
      <Popular />
      <Additional />
    </main>
  );
}
