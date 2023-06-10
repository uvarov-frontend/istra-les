export default function Address({ address }: { address: string }) {
  return (
    <div className="relative xl:w-80 pl-9 lg:w-64">
      <i className="icon-address absolute left-0 top-1/2 block h-5 w-5 -translate-y-1/2 bg-green" />
      <span className="block text-sm">{address}</span>
    </div>
  );
}
