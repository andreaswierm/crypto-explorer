import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps } from "@material-ui/core";
import { FC } from "react";

type AppBarProps = Pick<MuiAppBarProps, "children">;

export const AppBar: FC<AppBarProps> = ({ children }) => (
  <MuiAppBar>
    {children}
  </MuiAppBar>
)
