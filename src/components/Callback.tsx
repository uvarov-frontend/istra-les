export default function Callback({ phone }: { phone: string; }) {
  return (
    <div className="w-full relative pl-10 flex flex-col justify-center">
      <i className="block absolute top-1/2 left-0 w-6 h-6 bg-icon-phone bg-no-repeat bg-center -translate-y-1/2" />
      <span className="block">{ phone }</span>
      <button className="text-left" type="button">Обратный звонок</button>
    </div>
  );
}
