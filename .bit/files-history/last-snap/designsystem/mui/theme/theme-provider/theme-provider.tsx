import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme as muiCreateTheme,
  Theme as MuiTheme,
} from '@mui/material';
import { defaultTheme } from '@learnbit-react/material-ui.theme.my-theme';

export type ThemeSchema = {} & MuiTheme;

export type ThemeProviderProps = {
  theme?: ThemeSchema;
  children: any;
};

export const createTheme = (themeValues): MuiTheme => {
  return muiCreateTheme(themeValues);
};

export function ThemeProvider({
  /* the default theme will be created in the next step */
  theme = createTheme(defaultTheme),
  children,
}: ThemeProviderProps) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
