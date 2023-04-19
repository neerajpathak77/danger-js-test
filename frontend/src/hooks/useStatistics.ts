import { useEffect, useReducer, useCallback } from 'react';
import Api from 'utils/api';
import { transformCountryStateResponse } from 'utils/transformers';
import { HTTP_ROUTES } from 'utils/constants';
import {
  FilterType,
  IOption,
  ActionType,
  IStatisticsState,
  IStatisticsReducerAction,
  IData,
  IStatisticsData,
  ICaronaStateData
} from 'types';

const initialState = {
  cases: 0,
  deaths: 0,
  error: undefined,
  loading: false,
  recovered: 0
};

function statisticsReducer(state: IStatisticsState, action: IStatisticsReducerAction): IStatisticsState {
  switch (action.type) {
    case ActionType.FETCH: {
      return {
        ...state,
        error: undefined,
        loading: true
      };
    }
    case ActionType.SUCCESS: {
      return {
        ...state,
        ...action.payload,
        error: undefined,
        loading: false
      };
    }
    case ActionType.ERROR: {
      return {
        ...state,
        error: action?.payload?.error,
        loading: false
      };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
}

const totalReducer =
  (key: string) =>
  (acc: number, current: IData): number =>
    current?.[key] + acc;

const getBaseRoute = (region: IOption): string => {
  const { value, type } = region;
  const base = type === FilterType.STATE ? HTTP_ROUTES.STATE : HTTP_ROUTES.COUNTRY;

  return `${base}${value}`;
};

const getRoute = (route: string, days: string, region: IOption): string => `${getBaseRoute(region)}${route}${days}`;

function useStatistics(region: IOption, weeks: IOption, reducer = statisticsReducer): IStatisticsState {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchStatistics = useCallback(async (): Promise<void> => {
    try {
      dispatch({ type: ActionType.FETCH });
      const [cases, deaths, recovered] = await Promise.all([
        Api.get<ICaronaStateData | IStatisticsData[]>(getRoute(HTTP_ROUTES.CASES, weeks.value, region)),
        Api.get<ICaronaStateData | IStatisticsData[]>(getRoute(HTTP_ROUTES.DEATHS, weeks.value, region)),
        Api.get<ICaronaStateData | IStatisticsData[]>(getRoute(HTTP_ROUTES.RECOVERED, weeks.value, region))
      ]);

      dispatch({
        payload: {
          cases: transformCountryStateResponse(cases, region.value).reduce(totalReducer('cases'), 0),
          deaths: transformCountryStateResponse(deaths, region.value).reduce(totalReducer('deaths'), 0),
          recovered: transformCountryStateResponse(recovered, region.value).reduce(totalReducer('recovered'), 0)
        },
        type: ActionType.SUCCESS
      });
    } catch (err) {
      dispatch({
        payload: {
          error: err.message
        },
        type: ActionType.ERROR
      });
    }
  }, [region, weeks]);

  useEffect(() => {
    fetchStatistics();
  }, [fetchStatistics]);

  return state;
}

export default useStatistics;
