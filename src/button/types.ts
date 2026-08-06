import type { ButtonHTMLAttributes, MouseEventHandler } from 'react';

export type ButtonColors = 'default' | 'inverted';

export type ButtonView = 'primary' | 'secondary' | 'outlined' | 'text';

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'disabled' | 'onClick' | 'type'
>;

export interface ButtonProps extends NativeButtonProps {
  colors?: ButtonColors;
  view?: ButtonView;
  label?: string;
  className?: string;
  ariaLabel?: string;
  dataTestId?: string;
  disabled?: HTMLButtonElement['disabled'];
  type?: HTMLButtonElement['type'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
