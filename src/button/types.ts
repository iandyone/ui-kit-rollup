import type { MouseEventHandler } from 'react';

export type ButtonColors = 'default' | 'inverted';

export type ButtonView = 'primary' | 'secondary' | 'outlined' | 'text';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  colors?: ButtonColors;
  view?: ButtonView;
  disabled?: boolean;
  label?: string;
  type?: ButtonType;
  className?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
