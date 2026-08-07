import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect } from 'storybook/test';

import { Button } from './button';
import styles from './button.module.css';
import { type ButtonProps } from './types';

const DEFAULT_BUTTON_PROPS: ButtonProps = {
  label: 'Button',
  colors: 'default',
  view: 'primary',
  type: 'button',
  dataTestId: 'button',
  disabled: false,
  className: 'buttonClassName',
  ariaLabel: 'button-aria-label',
  onClick: fn(),
};

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Visible text rendered inside the button.',
      table: { defaultValue: { summary: '' } },
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables user interaction and applies the disabled visual state.',
      table: { defaultValue: { summary: 'false' } },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for icon-only or unclear button text.',
    },
    type: {
      control: 'radio',
      description:
        'Native button type used in forms: button, submit, or reset.',
      table: { defaultValue: { summary: 'button' } },
    },
    view: {
      control: 'radio',
      description:
        'Visual variant of the button: primary, secondary, outlined, or text.',
      table: { defaultValue: { summary: 'primary' } },
    },
    colors: {
      control: 'radio',
      description: 'Color scheme for the selected view: default or inverted.',
      table: { defaultValue: { summary: 'default' } },
    },

    className: {
      type: 'string',
      description: 'Additional class name appended to the button root element.',
    },
    dataTestId: {
      type: 'string',
      description: 'Test id attribute value used to query the button in tests.',
    },
    onClick: {
      type: 'function',
      description: 'Callback fired when the button is clicked.',
    },
  },
  args: DEFAULT_BUTTON_PROPS,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByTestId(args.dataTestId!);

    expect(canvas.getByText(args.label!)).toBeVisible();
    expect(canvas.getByRole(args.type!)).toBeVisible();
    expect(button).toBeVisible();

    expect(button).not.toBeDisabled();
    expect(button).toHaveClass(args.className!);
    expect(button).toHaveClass(styles.viewPrimary);
    expect(button).toHaveClass(styles.colorDefault);

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  args: { view: 'secondary' },
  play: async ({ canvas, args }) => {
    const button = canvas.getByTestId(args.dataTestId!);

    expect(button).toHaveClass(styles.viewSecondary);
  },
};

export const Inverted: Story = {
  args: { colors: 'inverted' },

  play: async ({ canvas, args }) => {
    const button = canvas.getByTestId(args.dataTestId!);

    expect(button).toHaveClass(styles.colorInverted);
  },
};

export const Outlined: Story = {
  args: { view: 'outlined' },
  play: async ({ canvas, args }) => {
    const button = canvas.getByTestId(args.dataTestId!);

    expect(button).toHaveClass(styles.viewOutlined);
  },
};

export const Text: Story = {
  args: { view: 'text' },
  play: async ({ canvas, args }) => {
    const button = canvas.getByTestId(args.dataTestId!);

    expect(button).toHaveClass(styles.viewText);
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas, args }) => {
    const button = canvas.getByTestId(args.dataTestId!);
    expect(button).toBeDisabled();
  },
};
