import { ActionType } from './data-options';

export interface IStatisticsState {
  cases: number;
  deaths: number;
  recovered: number;
  loading: boolean;
  error?: string;
}

export interface IData {
  [key: string]: number;
}

export interface IStatisticsReducerAction {
  type: ActionType;
  payload?: Partial<IStatisticsState>;
}

export interface ICaronaDataAttribure {
  cases: number;
  deaths: number;
  recovered: number;
}

export type IStatisticsData = {
  [key in keyof ICaronaDataAttribure]: ICaronaDataAttribure[key];
};

export interface ICaronaHistoryData {
  history: IStatisticsData[];
}

export interface ICaronaStateData {
  [key: string]: ICaronaHistoryData;
}
