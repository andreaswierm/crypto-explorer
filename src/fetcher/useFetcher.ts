import { useCallback, useEffect, useState } from "react";
import { createErrorState, createFetchingState, createLoadingState, createSuccessState } from "./state";
import { FetcherState, Fetcher, FetcherResponse } from "./types";

export const useFetcher = <T extends unknown>(fetcher: Fetcher<T>): FetcherResponse<T> => {
  const [state, setState] = useState<FetcherState<T>>(createLoadingState());

  const fetch = useCallback(async () => {
    try {
      const data = await fetcher();

      setState(createSuccessState(data));
    } catch(err) {
      setState(createErrorState(err));
    }
  }, [setState, fetcher]);

  const refetch = useCallback(() => {
    setState(createFetchingState());

    return fetch();
  }, [
    setState,
    fetch,
  ]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    data: state.data,
    isFetching: state.isFetching,
    isLoading: state.isLoading,
    refetch,
  };
}
