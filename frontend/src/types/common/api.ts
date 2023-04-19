export interface IAPIResponse<T> {
  error?: string;
  status?: string;
  data?: T;
}
