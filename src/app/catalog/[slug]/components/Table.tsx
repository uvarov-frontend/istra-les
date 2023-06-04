import getTables from '@/fetching/getTables';

export default async function Table({ tableID }: { tableID: string }) {
  const tables = await getTables(tableID);

  return (
    <div className="font-bold">{tables[0].id}</div>
  );
}
