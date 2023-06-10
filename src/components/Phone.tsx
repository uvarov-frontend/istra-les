import { ITranslate } from '@/types';

import Callback from './Callback';

export default function Phone({ phone, callback }: { phone: string; callback: ITranslate }) {
  return (
    <div className="relative flex w-full flex-col justify-center pl-9">
      <i className="icon-phone absolute left-0 top-1/2 block h-5 w-5 -translate-y-1/2 bg-green" />
      <b className="block">{phone}</b>
      <Callback callback={callback} className="text-left text-sm text-green hover:text-green_hover" />
    </div>
  );
}
