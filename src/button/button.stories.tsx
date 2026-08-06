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
    expect(canvas.getByText(args.label!)).toBeInTheDocument();
    expect(canvas.getByRole(args.type!)).toBeInTheDocument();
    expect(canvas.getByTestId(args.dataTestId!)).toBeInTheDocument();

    expect(canvas.getByTestId(args.dataTestId!)).not.toBeDisabled();
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(args.className!);
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.viewPrimary,
    );
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.colorDefault,
    );

    await userEvent.click(canvas.getByTestId(args.dataTestId!));
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  args: { view: 'secondary' },
  play: async ({ canvas, userEvent, args, mount }) => {
    await mount(<Button {...args} />);

    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.viewSecondary,
    );

    expect(canvas.getByText(args.label!)).toBeInTheDocument();
    expect(canvas.getByRole(args.type!)).toBeInTheDocument();
    expect(canvas.getByTestId(args.dataTestId!)).toBeInTheDocument();

    expect(canvas.getByTestId(args.dataTestId!)).not.toBeDisabled();
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(args.className!);

    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.colorDefault,
    );

    await userEvent.click(canvas.getByTestId(args.dataTestId!));
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Inverted: Story = {
  args: { colors: 'inverted' },

  play: async ({ canvas, userEvent, args, mount }) => {
    await mount(<Button {...args} />);

    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.colorInverted,
    );

    expect(canvas.getByText(args.label!)).toBeInTheDocument();
    expect(canvas.getByRole(args.type!)).toBeInTheDocument();
    expect(canvas.getByTestId(args.dataTestId!)).toBeInTheDocument();

    expect(canvas.getByTestId(args.dataTestId!)).not.toBeDisabled();
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(args.className!);
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.viewPrimary,
    );

    await userEvent.click(canvas.getByTestId(args.dataTestId!));
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Outlined: Story = {
  args: { view: 'outlined' },
  play: async ({ canvas, userEvent, args, mount }) => {
    await mount(<Button {...args} />);

    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.viewOutlined,
    );

    expect(canvas.getByText(args.label!)).toBeInTheDocument();
    expect(canvas.getByRole(args.type!)).toBeInTheDocument();
    expect(canvas.getByTestId(args.dataTestId!)).toBeInTheDocument();

    expect(canvas.getByTestId(args.dataTestId!)).not.toBeDisabled();
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(args.className!);
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.colorDefault,
    );

    await userEvent.click(canvas.getByTestId(args.dataTestId!));
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Text: Story = {
  args: { view: 'text' },
  play: async ({ canvas, userEvent, args, mount }) => {
    await mount(<Button {...args} />);

    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(styles.viewText);

    expect(canvas.getByText(args.label!)).toBeInTheDocument();
    expect(canvas.getByRole(args.type!)).toBeInTheDocument();
    expect(canvas.getByTestId(args.dataTestId!)).toBeInTheDocument();

    expect(canvas.getByTestId(args.dataTestId!)).not.toBeDisabled();
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(args.className!);
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.colorDefault,
    );

    await userEvent.click(canvas.getByTestId(args.dataTestId!));
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas, userEvent, args, mount }) => {
    await mount(<Button {...args} />);
    expect(canvas.getByTestId(args.dataTestId!)).toBeDisabled();

    await userEvent.click(canvas.getByTestId(args.dataTestId!));
    await expect(args.onClick).not.toHaveBeenCalled();

    expect(canvas.getByText(args.label!)).toBeInTheDocument();
    expect(canvas.getByRole(args.type!)).toBeInTheDocument();
    expect(canvas.getByTestId(args.dataTestId!)).toBeInTheDocument();

    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(args.className!);
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.viewPrimary,
    );
    expect(canvas.getByTestId(args.dataTestId!)).toHaveClass(
      styles.colorDefault,
    );
  },
};
