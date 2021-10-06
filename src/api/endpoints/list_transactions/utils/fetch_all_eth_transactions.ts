import { Transaction } from "../types";

type FetchAllETHRequestResponse = {
  amount: number;
  coin: string;
  description: string;
  from: string;
  insertedAt: number;
  state: string;
}[];

export const fetchAllETHTransactions = async (): Promise<Transaction[]> => {
  const getRequestResult = await fetch("/mocks/eth-noncustodial.json");

  const jsonResult: FetchAllETHRequestResponse = await getRequestResult.json();

  return jsonResult.map((item): Transaction => {
    return {
      amount: item.amount,
      coin: "ETH",
      description: item.description,
      from: item.from,
      insertedAt: new Date(item.insertedAt),
      state: item.state,
    }
  });
}
