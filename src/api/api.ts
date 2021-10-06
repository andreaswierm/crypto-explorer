import { createListTransactionsFetcher } from "./endpoints/list_transactions";

export const API = {
  transactions: {
    list: createListTransactionsFetcher(),
  }
}
