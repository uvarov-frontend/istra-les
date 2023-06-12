import translation from '@/translation.yaml';

export default function notFound() {
  const { info } = translation;

  return (
    <main className="container mx-auto my-5 flex min-h-[350px] flex-col justify-center lg:my-10">
      <h1 className="mb-6 text-center text-3xl font-bold">{info.error404.title}</h1>
      <p className="text-center">
        {info.error404.description}
        <br />
        {info.error404.content}
      </p>
    </main>
  );
}
