import Image from 'next/image';

export default function Loading() {
  return (
    <main className="container mx-auto my-10 min-h-[350px] flex items-center justify-center">
      <div className="flex items-center font-medium">
        <Image alt="loading" className="mr-4 animate-spin" height={30} src="/img/loading.svg" width={30} />
        Загрузка...
      </div>
    </main>
  );
}
