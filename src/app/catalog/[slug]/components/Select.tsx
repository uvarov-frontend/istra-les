'use client';

import { Listbox } from '@headlessui/react';

import { IDataItem } from '@/types';

export default function Select({ name, selectedValues, defaultValue, values, handleSelectChange }: {
  name: string;
  selectedValues: IDataItem;
  defaultValue: string;
  values: string[];
  handleSelectChange: (key: string, value: string) => void;
}) {
  return (
    <Listbox value={selectedValues[name] || defaultValue} onChange={(value) => handleSelectChange(name, value)}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full block text-left cursor-pointer rounded-md border border-gray bg-white pl-4 pr-12 py-[6px] text-sm
          before:absolute before:right-[35px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gray">
          <span className="block truncate">{selectedValues[name] || defaultValue}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[10px] text-gray_dark">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full rounded-md overflow-x-hidden overflow-y-auto bg-white text-sm shadow-sm border border-gray
          scrollbar-thin scrollbar-track-lite scrollbar-thumb-gray scrollbar-thumb-rounded">
          {values.map((value: string, i: number) => (
            <Listbox.Option
              key={i}
              // eslint-disable-next-line no-nested-ternary
              className={({ active, selected }) => `relative cursor-pointer text-sm select-none py-2 px-4 ${active && selected ? 'bg-green text-white' : selected ? 'bg-green text-white' : active ? 'bg-lite' : ''}`}
              value={value}>{value}</Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
