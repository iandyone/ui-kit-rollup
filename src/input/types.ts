import type { ChangeEventHandler, InputHTMLAttributes } from 'react';

export type InputView = 'default' | 'error';

export type InputSize = 'small' | 'medium';

type NativeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | 'className'
  | 'disabled'
  | 'onChange'
  | 'placeholder'
  | 'size'
  | 'type'
  | 'value'
>;

export interface InputProps extends NativeInputProps {
  value?: string;
  label?: string;
  description?: string;
  placeholder?: HTMLInputElement['placeholder'];
  view?: InputView;
  size?: InputSize;
  disabled?: HTMLInputElement['disabled'];
  type?: HTMLInputElement['type'];
  error?: string;
  labelClassName?: string;
  inputClassName?: string;
  descriptionClassName?: string;
  dataTestId?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
