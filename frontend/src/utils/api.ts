import { HOST } from 'utils/constants';
import { IAPIResponse } from 'types';

const Api = {
  async get<T>(route: string): Promise<IAPIResponse<T>> {
    try {
      const url = `${HOST}${route}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.ok) {
        return Promise.resolve(result);
      }
      return Promise.reject(result);
    } catch (error) {
      throw new Error(error);
    }
  }
};

export default Api;
