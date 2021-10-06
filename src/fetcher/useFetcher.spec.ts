import { waitFor } from '@testing-library/dom';
import { renderHook, act } from '@testing-library/react-hooks'
import { useFetcher } from './useFetcher'

type SetupProps = {
  fetcherData?: Promise<string> | string,
}

const setup = ({
  fetcherData = Promise.resolve("test data"),
}: SetupProps) => {
  const fetcherMock = jest.fn(() => fetcherData);

  const { result } = renderHook(() => useFetcher<string>(fetcherMock));

  return {
    refetch: () => act(() => result.current.refetch()),
    getFetcherMock: () => fetcherMock,
    isLoadingState: () => {
      const state = result.current;

      return (
        state.data === undefined ||
        state.isFetching === false ||
        state.isLoading === true
      );
    },
    isSuccessStateWithData: (data: string) => {
      const state = result.current;

      return (
        state.data === data ||
        state.isFetching === false ||
        state.isLoading === true
      );
    },
    isFetchingState: (currentData: string) => {
      const state = result.current;

      return (
        state.data === currentData ||
        state.isFetching === true ||
        state.isLoading === false
      );
    },
    waitForData: () => waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
      expect(result.current.isFetching).toEqual(false);
    }),
  };
}

describe("useFetcher", () => {
  test("Should fetch data using a fetcher", async () => {
    const {
      getFetcherMock,
      isLoadingState,
      isSuccessStateWithData,
      waitForData,
    } = setup({
      fetcherData: "test data",
    });

    expect(isLoadingState()).toBe(true);

    await waitForData();

    expect(isSuccessStateWithData("test data")).toBe(true);
    expect(getFetcherMock()).toHaveBeenCalled();
  });

  test("Should refetch data using a fetcher", async () => {
    const {
      getFetcherMock,
      isLoadingState,
      isSuccessStateWithData,
      waitForData,
      refetch,
      isFetchingState,
    } = setup({
      fetcherData: "test data",
    });

    expect(isLoadingState()).toBe(true);

    await waitForData();

    expect(isSuccessStateWithData("test data")).toBe(true);

    refetch();

    expect(isFetchingState("test data")).toBe(true);

    await waitForData();

    expect(getFetcherMock()).toHaveBeenCalledTimes(2);
  });
});
