import { FetcherState } from "./types";

export const createLoadingState = <T>(): FetcherState<T> => ({
  isFetching: false,
  isLoading: true,
  data: undefined,
  error: undefined,
});

export const createFetchingState = <T>(): FetcherState<T> => ({
  isFetching: true,
  isLoading: false,
  data: undefined,
  error: undefined,
});

export const createSuccessState = <T>(data: T): FetcherState<T> => ({
  isFetching: false,
  isLoading: false,
  data: data,
  error: undefined,
});

export const createErrorState = <T>(err: unknown): FetcherState<T> => ({
  isFetching: false,
  isLoading: false,
  data: undefined,
  error: err,
});
