import { useMemo } from "react";
import { useAPI } from "../../../api/hooks/useAPI";
import { useFetcher } from "../../../fetcher/useFetcher";

export const useListTransactionsPageController = () => {
  const api = useAPI();

  const {
    isLoading,
    data,
  } = useFetcher(api.transactions.list);

  const transactions = useMemo(() => {
    return data || [];
  }, [data]);

  return {
    isLoading,
    transactions,
  }
}
