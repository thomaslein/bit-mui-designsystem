import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeProvider } from '@kreftregisteret/designsystem.mui.theme.theme-provider';

import { ReactWithMuiAspect } from './react-mui.aspect';

export class ReactWithMuiPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const reactWithMuiPreviewMain = new ReactWithMuiPreviewMain();

    react.registerProvider([
      ThemeProvider,
    ]);

    return reactWithMuiPreviewMain;
  }
}

ReactWithMuiAspect.addRuntime(ReactWithMuiPreviewMain);
