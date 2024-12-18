import {
  Container as BaseContainer,
  type ContainerProps as BaseContainerProps,
  type ContainerClasses,
} from '@mui/material';
import type { SxProps, Breakpoint } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './container.module.scss';

export interface ContainerProps extends BaseContainerProps {
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ContainerClasses>;
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters?: boolean;
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed?: boolean;
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth?: Breakpoint | false;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the button.
   */
  className?: string;
}

export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <BaseContainer
      className={classNames(styles.container, className)}
      {...rest}
    >
      {children}
    </BaseContainer>
  );
}
