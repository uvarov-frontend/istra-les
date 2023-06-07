export default function Address({ address }: { address: string; }) {
  return (
    <div className="w-80 relative pl-9">
      <i className="block absolute top-1/2 left-0 w-5 h-5 icon-address bg-green -translate-y-1/2" />
      <span className="block text-sm">{ address }</span>
    </div>
  );
}
