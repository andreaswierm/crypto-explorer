import { Coin } from "../../../types/coins";

export type Transaction = {
  amount: number;
  coin: Coin;
  description: string;
  from: string;
  insertedAt: Date;
  state: string;
  hash: string;
  to: string;
};
