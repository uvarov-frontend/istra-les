import Image from 'next/image';

import translation from '@/translation.yaml';

export default function Loading() {
  const { info } = translation;

  return (
    <main className="container mx-auto my-5 flex min-h-[350px] items-center justify-center lg:my-10">
      <div className="flex items-center font-medium">
        <Image alt="loading" className="mr-4 animate-spin" height={30} src="/img/loading.svg" width={30} />
        {info.loading}
      </div>
    </main>
  );
}
