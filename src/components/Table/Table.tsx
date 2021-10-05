import { Table as MuiTable, TableProps as MuiTableProps } from "@material-ui/core";
import { FC } from "react";

type TableProps = Pick<MuiTableProps, "size">;

export const Table: FC<TableProps> = (props) => <MuiTable {...props} />;
