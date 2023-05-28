export default function Callback({ phone }: { phone: string; }) {
  return (
    <div className="w-full relative pl-10 flex flex-col justify-center">
      <i className="block absolute top-1/2 left-0 w-6 h-6 icon-phone bg-green -translate-y-1/2" />
      <span className="block">{ phone }</span>
      <button className="text-left text-green hover:text-green_hover" type="button">Обратный звонок</button>
    </div>
  );
}
