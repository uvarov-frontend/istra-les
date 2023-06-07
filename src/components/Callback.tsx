export default function Callback({ phone }: { phone: string; }) {
  return (
    <div className="w-full relative pl-9 flex flex-col justify-center">
      <i className="block absolute top-1/2 left-0 w-5 h-5 icon-phone bg-green -translate-y-1/2" />
      <span className="block">{ phone }</span>
      {/* <button className="text-left text-green hover:text-green_hover" type="button">Обратный звонок</button> */}
    </div>
  );
}
