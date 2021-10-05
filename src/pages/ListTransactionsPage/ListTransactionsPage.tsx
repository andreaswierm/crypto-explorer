import { FC } from "react";
import { AppBar } from "../../components/AppBar";
import { Container } from "../../components/Container";
import { Padding } from "../../components/Padding";
import { Paper } from "../../components/Paper";
import { Row } from "../../components/Row";
import { TextField } from "../../components/TextField";
import { Toolbar } from "../../components/Toolbar";
import { Typography } from "../../components/Typography";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "../../components/Table";

export const ListTransactionsPage: FC = () => {
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

      <Container maxWidth="md">
        <Padding top={32}>
          <Paper>
            <Toolbar>
              <Row justifyContent="space-between" alignItems="center">
                <Typography.Title level={6}>
                  Transactions
                </Typography.Title>

                <TextField
                  label="Search"
                />
              </Row>
            </Toolbar>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TableSortLabel>
                        Disert
                      </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>
                      test
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Padding>
      </Container>
    </>
  );
}
