import Callback from './Callback';

export default function Phone({ phone, callback }: { phone: string, callback: string }) {
  return (
    <div className="w-full relative pl-9 flex flex-col justify-center">
      <i className="block absolute top-1/2 left-0 w-5 h-5 icon-phone bg-green -translate-y-1/2" />
      <b className="block">{ phone }</b>
      <Callback callback={callback} className="text-left text-sm text-green hover:text-green_hover" />
    </div>
  );
}
