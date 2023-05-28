export default function Address({ address }: { address: string; }) {
  return (
    <div className="w-80 relative pl-10">
      <i className="block absolute top-1/2 left-0 w-6 h-6 icon-address bg-green -translate-y-1/2" />
      <span className="block">{ address }</span>
    </div>
  );
}
