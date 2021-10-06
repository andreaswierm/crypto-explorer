import { Transaction } from "../types";

type FetchAllBTCRequestResponse = {
  amount: number;
  coin: string;
  description: string;
  from: string;
  insertedAt: number;
  state: string;
}[];

export const fetchAllBTCTransactions = async (): Promise<Transaction[]> => {
  const getRequestResult = await fetch("/mocks/btc-noncustodial.json");

  const jsonResult: FetchAllBTCRequestResponse = await getRequestResult.json();

  return jsonResult.map((item): Transaction => {
    return {
      amount: item.amount,
      coin: item.coin,
      description: item.description,
      from: item.from,
      insertedAt: new Date(item.insertedAt),
      state: item.state,
    }
  });
}
