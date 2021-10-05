import { createTheme, ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { FC, useMemo } from "react";

export const ThemeProvider: FC = ({ children }) => {
  const theme = useMemo(createTheme, []);

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}
