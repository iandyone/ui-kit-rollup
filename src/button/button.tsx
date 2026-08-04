import classNames from 'classnames';
import { type FC } from 'react';

import styles from './button.module.css';
import type { ButtonColors, ButtonProps, ButtonView } from './types.js';

const viewClassName: Record<ButtonView, string> = {
  primary: styles.viewPrimary,
  secondary: styles.viewSecondary,
  outlined: styles.viewOutlined,
  text: styles.viewText,
};

const colorClassName: Record<ButtonColors, string> = {
  default: styles.colorDefault,
  inverted: styles.colorInverted,
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    view = 'primary',
    colors = 'default',
    disabled = false,
    label = '',
    type = 'button',
    ariaLabel,
    className: externalClassName,
    onClick,
  } = props;

  return (
    <button
      aria-label={ariaLabel}
      className={classNames(
        styles.button,
        viewClassName[view],
        colorClassName[colors],
        externalClassName,
        { [styles.disabled]: disabled },
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
