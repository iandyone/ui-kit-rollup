import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import type { TypographyProps } from './types';
import { Typography } from './typography';
import styles from './typography.module.css';

const DEFAULT_TYPOGRAPHY_PROPS: TypographyProps = {
  children: 'Typography text',
  variant: 'body',
  color: 'default',
  weight: 'regular',
  className: 'typographyClassName',
  dataTestId: 'typography',
};

const meta = {
  title: 'Typography',
  component: Typography,
  args: DEFAULT_TYPOGRAPHY_PROPS,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content rendered inside the typography element.',
    },
    variant: {
      control: 'radio',
      description: 'Visual text style preset: h1, h2, h3, body, or caption.',
      table: { defaultValue: { summary: 'body' } },
    },
    color: {
      control: 'radio',
      description: 'Text color preset: default, muted, accent, or danger.',
      table: { defaultValue: { summary: 'default' } },
    },
    weight: {
      control: 'radio',
      description: 'Font weight preset: regular, medium, or bold.',
      table: { defaultValue: { summary: 'regular' } },
    },

    className: {
      control: 'text',
      description:
        'Additional class name appended to the typography root element.',
    },
    dataTestId: {
      control: 'text',
      description:
        'Test id attribute value used to query the typography element in tests.',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, args }) => {
    const typography = canvas.getByTestId(args.dataTestId!);

    expect(typography).toBeVisible();
    expect(typography).toHaveTextContent(String(args.children));
    expect(typography).toHaveClass(styles.variantBody);
    expect(typography).toHaveClass(styles.colorDefault);
    expect(typography).toHaveClass(styles.weightRegular);
    expect(typography).toHaveClass(args.className!);
    expect(typography.tagName.toLowerCase()).toBe('p');
  },
};

export const Heading: Story = {
  args: {
    children: 'Heading text',
    variant: 'h1',
    weight: 'bold',
  },
  play: async ({ canvas, args }) => {
    const typography = canvas.getByTestId(args.dataTestId!);

    expect(typography).toBeVisible();
    expect(typography).toHaveTextContent(String(args.children));
    expect(typography).toHaveClass(styles.variantH1);
    expect(typography).toHaveClass(styles.weightBold);
    expect(typography.tagName.toLowerCase()).toBe('h1');
  },
};

export const Muted: Story = {
  args: {
    children: 'Muted text',
    color: 'muted',
  },
  play: async ({ canvas, args }) => {
    const typography = canvas.getByTestId(args.dataTestId!);

    expect(typography).toBeVisible();
    expect(typography).toHaveTextContent(String(args.children));
    expect(typography).toHaveClass(styles.colorMuted);
  },
};

export const Accent: Story = {
  args: {
    children: 'Accent text',
    color: 'accent',
    weight: 'medium',
  },
  play: async ({ canvas, args }) => {
    const typography = canvas.getByTestId(args.dataTestId!);

    expect(typography).toBeVisible();
    expect(typography).toHaveTextContent(String(args.children));
    expect(typography).toHaveClass(styles.colorAccent);
    expect(typography).toHaveClass(styles.weightMedium);
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger text',
    color: 'danger',
  },
  play: async ({ canvas, args }) => {
    const typography = canvas.getByTestId(args.dataTestId!);

    expect(typography).toBeVisible();
    expect(typography).toHaveTextContent(String(args.children));
    expect(typography).toHaveClass(styles.colorDanger);
  },
};

export const AsElement: Story = {
  args: {
    children: 'Body style rendered as span',
    variant: 'body',
  },
  play: async ({ canvas, args }) => {
    const typography = canvas.getByTestId(args.dataTestId!);

    expect(typography).toBeVisible();
    expect(typography).toHaveTextContent(String(args.children));
    expect(typography).toHaveClass(styles.variantBody);
  },
};
