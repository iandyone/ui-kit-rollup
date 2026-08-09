import type { ChangeEventHandler, InputHTMLAttributes } from 'react';

export type InputView = 'default' | 'error';

export type InputSize = 'small' | 'medium';

type NativeInputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'disabled'
  | 'id'
  | 'maxLength'
  | 'minLength'
  | 'name'
  | 'onBlur'
  | 'onFocus'
  | 'placeholder'
  | 'required'
  | 'type'
>;

export interface InputProps extends NativeInputProps {
  value?: string;
  label?: string;
  description?: string;
  view?: InputView;
  size?: InputSize;
  error?: string;
  labelClassName?: string;
  inputClassName?: string;
  descriptionClassName?: string;
  dataTestId?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
