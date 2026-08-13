import type { HTMLAttributes, ReactNode } from 'react';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

export type TypographyColor = 'default' | 'muted' | 'accent' | 'danger';

export type TypographyWeight = 'regular' | 'medium' | 'bold';

type NativeTypographyProps = Pick<
  HTMLAttributes<HTMLElement>,
  | 'id'
  | 'onBlur'
  | 'onClick'
  | 'onFocus'
  | 'role'
  | 'tabIndex'
  | 'title'
>;

export interface TypographyProps extends NativeTypographyProps {
  children?: ReactNode;
  variant?: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
  className?: string;
  dataTestId?: string;
}
