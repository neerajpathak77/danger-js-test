import { IOption } from './select-options';

export interface ISelectProps {
  options: IOption[];
  selected: IOption;
  onSelect: (option: IOption) => void;
}
