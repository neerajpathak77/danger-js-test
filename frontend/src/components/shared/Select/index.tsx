import React, { FC, ReactElement } from 'react';
import { ISelectProps, IOption } from 'types';
import './index.css';

const Select: FC<ISelectProps> = ({ options, onSelect, selected }): ReactElement => {
  const getOption = (value: string): IOption | undefined => options.find((item: IOption) => value === item.value);

  const handleSelect = (value: string): void => {
    const selection = getOption(value);
    if (selection) {
      onSelect(selection);
    }
  };

  return (
    <select defaultValue={selected?.value} onChange={({ target: { value } }) => void handleSelect(value)}>
      {options.map(({ value, text, id }: IOption) => (
        <option key={id} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
};

export default Select;
