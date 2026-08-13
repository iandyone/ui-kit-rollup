import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonColors = 'default' | 'inverted';

export type ButtonView = 'primary' | 'secondary' | 'outlined' | 'text';

type NativeButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | 'disabled'
  | 'id'
  | 'name'
  | 'onBlur'
  | 'onClick'
  | 'onFocus'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'tabIndex'
  | 'title'
  | 'type'
>;

export interface ButtonProps extends NativeButtonProps {
  children?: ReactNode;
  colors?: ButtonColors;
  view?: ButtonView;
  label?: string;
  className?: string;
  ariaLabel?: string;
  dataTestId?: string;
}
