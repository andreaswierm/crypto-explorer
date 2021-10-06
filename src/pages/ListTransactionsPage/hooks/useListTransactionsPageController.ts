import { uniqueId } from "lodash";
import { useMemo, useState } from "react";
import { useAPI } from "../../../api/hooks/useAPI";
import { useFetcher } from "../../../fetcher/useFetcher";

export const useListTransactionsPageController = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
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
    const transactions = data || [];

    if (searchTerm.length !== 0) {
      const searchTermLowerCase = searchTerm.toLocaleLowerCase();

      return transactions.filter(transaction => {
        return transaction.from.toLocaleLowerCase().includes(searchTermLowerCase);
      });
    }

    return transactions;
  }, [data, searchTerm]);

  return useMemo(() => ({
    isLoading,
    transactions,
    searchTerm,
    setSearchTerm,
  }), [isLoading, transactions, searchTerm, setSearchTerm]);
}
