'use client';

import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { Dispatch, SetStateAction, memo, useEffect, useState } from 'react';
import Select from 'react-select';

import { IValue } from '@/types';

const CustomSelect = memo(({
  name,
  options,
  id,
  selectParams,
  setSelectParams,
}: {
  name: string;
  options: string[];
  id: number,
  selectParams: { [key: number]: string; },
  setSelectParams: Dispatch<SetStateAction<{ [key: number]: string; }>>
}) => {

  const optionSelect: IValue[] = [];

  const cyrillicToTranslit = CyrillicToTranslit();
  const correctName = cyrillicToTranslit.transform(name, '_').toLowerCase();

  options.forEach((opt) =>
    optionSelect.push({
      label: opt,
      value: opt,
    }),
  );

  const [currentValue, setCurrentValue] = useState(optionSelect[0]);

  useEffect(() => {
    setCurrentValue(optionSelect[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  return (
    <div>
      <span className="mb-2 block text-sm text-gray_dark">{name}</span>
      <div className="block">
        <Select
          className="xl:w-[220px]"
          instanceId={correctName}
          isClearable={false}
          isSearchable={false}
          name={correctName}
          options={optionSelect}
          placeholder="Выберите..."
          value={currentValue}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              ':hover': {
                borderColor: '#5ec03b',
              },
              borderColor: '#ddd',
              borderRadius: '6px',
              boxShadow: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              minHeight: '34px',
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              ':hover': {
                color: '#8c8c8c',
              },
              color: '#8c8c8c',
              padding: '6px 8px',
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              border: '1px solid #ddd',
              boxShadow: '0 5px 20px rgba(105, 105, 105, 0.1)',
              margin: '3px 0',
              overflow: 'hidden',
              padding: '0px',
            }),
            menuList: (baseStyles) => ({
              ...baseStyles,
              padding: '0px',
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              ':hover': {
                backgroundColor: state.isSelected ? '#5ec03b' : '#f6f6f6',
              },
              backgroundColor: state.isSelected ? '#5ec03b' : '#fff',
              cursor: 'pointer',
              fontSize: '14px',
              padding: '6px 8px',
            }),
          }}
          onChange={(newValue) => {
            if (currentValue.value === (newValue?.value as string) || !newValue) return;
            setCurrentValue(newValue);
            setSelectParams({...selectParams, [id]: newValue.value});
          }}
        />
      </div>
    </div>
  );
});

export default CustomSelect;
