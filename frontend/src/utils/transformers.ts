import { IStatisticsData, ICaronaStateData, IAPIResponse } from 'types';

const processCountryData = (data: IStatisticsData[]): IStatisticsData[] => data;

const processRegionData = (data: ICaronaStateData, region: string): IStatisticsData[] => data?.[region]?.history;

const processResponse = (
  response: IAPIResponse<ICaronaStateData | IStatisticsData[]>,
  region: string
): IStatisticsData[] => {
  const responseData = response?.data;
  if (Array.isArray(responseData)) {
    return processCountryData(responseData);
  }
  if (responseData) {
    return processRegionData(responseData, region);
  }
  return [];
};

export const transformCountryStateResponse = (
  response: IAPIResponse<ICaronaStateData | IStatisticsData[]>,
  region: string
): IStatisticsData[] => processResponse(response, region);
