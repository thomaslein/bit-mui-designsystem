import type { ThemeOptions as BaseThemeOptions } from '@mui/material';
import type { TypographyVariantsOptions } from '@kreftregisteret/designsystem.data-display.typography';

/**
 * extend the options of the theme with an additional typography variants
 */
export interface ThemeOptions extends BaseThemeOptions {
  typography?: TypographyVariantsOptions;
}
