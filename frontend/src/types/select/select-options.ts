import { FilterType } from '../common';

export interface IOption {
  id: string;
  value: string;
  text: string;
  type: FilterType;
}
