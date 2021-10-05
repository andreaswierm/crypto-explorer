import { TableSortLabel as MuiTableSortLabel, TableSortLabelProps as MuiTableSortLabelProps } from "@material-ui/core";
import { FC } from "react";

type TableSortLabelProps = Pick<MuiTableSortLabelProps, "active" | "direction" | "onClick">;

export const TableSortLabel: FC<TableSortLabelProps> = (props) => <MuiTableSortLabel {...props} />;
