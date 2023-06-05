import { IData } from '@/types';

export default function Table({ data }: { data: IData[] }) {

  return (
    <div className="font-bold">{data[0].id}</div>
  );
}
