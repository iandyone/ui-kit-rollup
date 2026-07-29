export interface ButtonProps {
  message?: string;
}

import { type FC } from 'react';

export const Button: FC<ButtonProps> = ({ message = '' }) => {
  return <button type='button'>{message}</button>;
};
