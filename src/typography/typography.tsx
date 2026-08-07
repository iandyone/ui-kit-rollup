import classNames from 'classnames';
import { type FC } from 'react';

import type {
  TypographyColor,
  TypographyProps,
  TypographyVariant,
  TypographyWeight,
} from './types.js';
import styles from './typography.module.css';

const defaultElementByVariant: Record<
  TypographyVariant,
  'h1' | 'h2' | 'h3' | 'p' | 'span'
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  caption: 'span',
};

const variantClassName: Record<TypographyVariant, string> = {
  h1: styles.variantH1,
  h2: styles.variantH2,
  h3: styles.variantH3,
  body: styles.variantBody,
  caption: styles.variantCaption,
};

const colorClassName: Record<TypographyColor, string> = {
  default: styles.colorDefault,
  muted: styles.colorMuted,
  accent: styles.colorAccent,
  danger: styles.colorDanger,
};

const weightClassName: Record<TypographyWeight, string> = {
  regular: styles.weightRegular,
  medium: styles.weightMedium,
  bold: styles.weightBold,
};

export const Typography: FC<TypographyProps> = (props) => {
  const {
    children,
    variant = 'body',
    color = 'default',
    weight = 'regular',
    className,
    dataTestId,
    ...typographyProps
  } = props;
  const Component = defaultElementByVariant[variant];

  return (
    <Component
      className={classNames(
        styles.typography,
        variantClassName[variant],
        colorClassName[color],
        weightClassName[weight],
        className,
      )}
      data-test-id={dataTestId}
      {...typographyProps}
    >
      {children}
    </Component>
  );
};
