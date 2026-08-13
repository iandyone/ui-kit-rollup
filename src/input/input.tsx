import classNames from 'classnames';
import { type ChangeEvent, type FC, useEffect, useId, useState } from 'react';

import styles from './input.module.css';
import type { InputProps, InputSize, InputView } from './types.js';

const viewClassName: Record<InputView, string> = {
  default: styles.viewDefault,
  error: styles.viewError,
};

const sizeClassName: Record<InputSize, string> = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
};

export const Input: FC<InputProps> = (props) => {
  const generatedId = useId();
  const {
    value = '',
    size = 'medium',
    type = 'text',
    label,
    description,
    disabled = false,
    error,
    view = error ? 'error' : 'default',
    labelClassName,
    inputClassName,
    descriptionClassName,
    dataTestId,
    id = generatedId,
    onChange,
    ...inputProps
  } = props;

  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const descriptionId = description || error ? `${id}-description` : undefined;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };

  return (
    <label
      htmlFor={id}
      data-test-id={`${dataTestId}-label`}
      className={classNames(styles.root, labelClassName, {
        [styles.disabled]: disabled,
      })}
    >
      {label && <span className={styles.label}>{label}</span>}

      <input
        {...inputProps}
        aria-describedby={descriptionId}
        aria-invalid={view === 'error'}
        className={classNames(
          styles.input,
          viewClassName[view],
          sizeClassName[size],
          inputClassName,
        )}
        data-test-id={dataTestId}
        disabled={disabled}
        id={id}
        type={type}
        value={inputValue}
        onChange={handleChange}
      />

      {error && (
        <span
          className={styles.error}
          id={descriptionId}
          data-test-id={`${dataTestId}-error-description`}
        >
          {error}
        </span>
      )}

      {!error && description && (
        <span
          className={classNames(styles.description, descriptionClassName)}
          id={descriptionId}
          data-test-id={`${dataTestId}-description`}
        >
          {description}
        </span>
      )}
    </label>
  );
};
