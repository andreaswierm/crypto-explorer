import { TableCell as MuiTableCell, TableCellProps as MuiTableCellProps } from "@material-ui/core";
import { FC } from "react";

type TableCellProps = Pick<MuiTableCellProps, "align" | "padding" | "sortDirection">;

export const TableCell: FC<TableCellProps> = (props) => <MuiTableCell {...props} />;
