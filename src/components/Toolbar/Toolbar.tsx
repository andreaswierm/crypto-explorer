import { Toolbar as MuiToolbar, ToolbarProps as MuiToolbarProps } from "@material-ui/core";
import { FC } from "react";

type ToolbarProps = Pick<MuiToolbarProps, "children">;

export const Toolbar: FC<ToolbarProps> = (props) => (
  <MuiToolbar {...props} />
);
