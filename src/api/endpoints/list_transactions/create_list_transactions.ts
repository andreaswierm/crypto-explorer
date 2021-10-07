import { flatten } from "lodash";
import { Transaction } from "../../../types/transactions";
import { fetchAllBTCTransactions } from "./utils/fetch_all_btc_transactions";
import { fetchAllETHTransactions } from "./utils/fetch_all_eth_transactions";

type ListTransactionsFetcher = () => Promise<Transaction[]>;

export const createListTransactionsFetcher = (): ListTransactionsFetcher => {
  return async () => {
    const [
      BTCTransactions,
      ETHTransactions
    ] = await Promise.all([
      fetchAllBTCTransactions(),
      fetchAllETHTransactions(),
    ]);

    return flatten([
      BTCTransactions,
      ETHTransactions,
    ]);
  }
}
