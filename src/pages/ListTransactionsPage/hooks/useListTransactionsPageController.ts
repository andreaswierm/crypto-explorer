import { uniqueId } from "lodash";
import { useMemo } from "react";
import { useAPI } from "../../../api/hooks/useAPI";
import { useFetcher } from "../../../fetcher/useFetcher";

export const useListTransactionsPageController = () => {
  const api = useAPI();

  const {
    isLoading,
    data,
  } = useFetcher(async () => {
    const transactions = await api.transactions.list();

    return transactions.map(transaction => ({
      ...transaction,
      key: uniqueId("transaction-"),
    }));
  });

  const transactions = useMemo(() => {
    return data || [];
  }, [data]);

  return {
    isLoading,
    transactions,
  }
}
