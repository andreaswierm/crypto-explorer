export type FetcherState<T> = {
  isLoading: boolean;
  isFetching: boolean;
  data: T | undefined;
  error: unknown | undefined;
}

export type Fetcher<T extends unknown> = () => Promise<T> | T;

export type FetcherResponse<T extends unknown> = Pick<FetcherState<T>, "isLoading" | "isFetching" | "data"> & {
  refetch: () => void;
};
