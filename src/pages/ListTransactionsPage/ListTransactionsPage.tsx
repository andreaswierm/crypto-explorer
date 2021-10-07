import { FC } from "react";
import { AppBar } from "../../components/AppBar";
import { Container } from "../../components/Container";
import { Padding } from "../../components/Padding";
import { Paper } from "../../components/Paper";
import { Row } from "../../components/Row";
import { TextField } from "../../components/TextField";
import { Toolbar } from "../../components/Toolbar";
import { Typography } from "../../components/Typography";
import { FullWindowContainer } from "../../components/FullWindowContainer";
import { Center } from "../../components/Center";
import { CircularProgress } from "../../components/CircularProgress";
import { useListTransactionsPageController } from "./hooks/useListTransactionsPageController";
import { Coin } from "../../types/coins";
import { useDateFormatter, useNumberFormatter } from "../../formatter";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "../../components/Table";

const coinLabels: Record<Coin, string> = {
  "BTC": "Bitcoin",
  "ETH": "Ethereum",
}

export const ListTransactionsPage: FC = () => {
  const {
    hh_mm_dd_mm_yyyy,
  } = useDateFormatter();

  const {
    currency,
  } = useNumberFormatter();

  const {
    isLoading,
    transactions,
    searchTerm,
    setSearchTerm,
    isActive,
    createSortHandler,
    getDirection,
  } = useListTransactionsPageController();

  if (isLoading) {
    return <FullWindowContainer>
      <Center>
        <CircularProgress />
      </Center>
    </FullWindowContainer>
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography.Title level={6}>
            Crypto Explorer
          </Typography.Title>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Container>
        <Padding top={32}>
          <Paper>
            <Toolbar>
              <Row justifyContent="space-between" alignItems="center">
                <Typography.Title level={6}>
                  Transactions
                </Typography.Title>

                <TextField
                  label="Search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </Row>
            </Toolbar>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TableSortLabel
                        active={isActive("coin")}
                        direction={getDirection("coin")}
                        onClick={createSortHandler("coin")}
                      >
                        Coin
                      </TableSortLabel>
                    </TableCell>

                    <TableCell>
                      <TableSortLabel
                        active={isActive("to")}
                        direction={getDirection("to")}
                        onClick={createSortHandler("to")}
                      >
                        To
                      </TableSortLabel>
                    </TableCell>

                    <TableCell>
                      <TableSortLabel
                        active={isActive("from")}
                        direction={getDirection("from")}
                        onClick={createSortHandler("from")}
                      >
                        From
                      </TableSortLabel>
                    </TableCell>

                    <TableCell>
                      <TableSortLabel
                        active={isActive("amount")}
                        direction={getDirection("amount")}
                        onClick={createSortHandler("amount")}
                      >
                        Amount
                      </TableSortLabel>
                    </TableCell>

                    <TableCell>
                      <TableSortLabel
                        active={isActive("insertedAt")}
                        direction={getDirection("insertedAt")}
                        onClick={createSortHandler("insertedAt")}
                      >
                        Date
                      </TableSortLabel>
                    </TableCell>

                    <TableCell>
                      <TableSortLabel
                        active={isActive("state")}
                        direction={getDirection("state")}
                        onClick={createSortHandler("state")}
                      >
                        State
                      </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {transactions.map(transaction => (
                    <TableRow key={transaction.key}>
                      <TableCell>
                        {coinLabels[transaction.coin]}
                      </TableCell>

                      <TableCell>
                        {transaction.to}
                      </TableCell>

                      <TableCell>
                        {transaction.from}
                      </TableCell>

                      <TableCell>
                        {currency(transaction.amount)}
                      </TableCell>

                      <TableCell>
                        {hh_mm_dd_mm_yyyy(transaction.insertedAt)}
                      </TableCell>

                      <TableCell>
                        {transaction.state}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Padding>
      </Container>
    </>
  );
}
