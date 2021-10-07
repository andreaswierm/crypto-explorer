import { uniqueId } from "lodash";
import { useMemo, useState } from "react";
import { useAPI } from "../../../api/hooks/useAPI";
import { useTableSortController } from "../../../components/Table";
import { useFetcher } from "../../../fetcher/useFetcher";

export const useListTransactionsPageController = () => {
  const api = useAPI();
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  const {
    createSortHandler,
    getDirection,
    isActive,
    data: sortedData,
  } = useTableSortController(data || []);

  const transactions = useMemo(() => {
    const transactions = sortedData || [];

    if (searchTerm.length !== 0) {
      const searchTermLowerCase = searchTerm.toLocaleLowerCase();

      return transactions.filter(transaction => {
        return transaction.from.toLocaleLowerCase().includes(searchTermLowerCase);
      });
    }

    return transactions;
  }, [sortedData, searchTerm]);

  return {
    isLoading,
    transactions,
    searchTerm,
    setSearchTerm,
    isActive,
    createSortHandler,
    getDirection,
  };
}
