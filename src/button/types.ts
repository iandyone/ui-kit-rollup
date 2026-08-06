import type { MouseEventHandler } from 'react';

export type ButtonColors = 'default' | 'inverted';

export type ButtonView = 'primary' | 'secondary' | 'outlined' | 'text';

export interface ButtonProps {
  colors?: ButtonColors;
  view?: ButtonView;
  label?: string;
  className?: string;
  ariaLabel?: string;
  dataTestId?: string;
  disabled?: HTMLButtonElement['disabled'];
  type?: HTMLButtonElement['type'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  [key: string]: any;
}
