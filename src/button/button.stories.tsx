import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta = {
  component: Button,
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
    onClick: {
      type: 'function',
      description: 'Callback fired when the button is clicked.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    colors: 'default',
    view: 'primary',
    ariaLabel: '',
    disabled: false,
    type: 'button',
    className: '',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    colors: 'default',
    view: 'secondary',
    ariaLabel: '',
    disabled: false,
    type: 'button',
    className: '',
  },
};

export const Inverted: Story = {
  args: {
    label: 'Button',
    colors: 'inverted',
    view: 'secondary',
    ariaLabel: '',
    disabled: false,
    type: 'button',
    className: '',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Button',
    colors: 'default',
    view: 'outlined',
    ariaLabel: '',
    disabled: false,
    type: 'button',
    className: '',
  },
};

export const Text: Story = {
  args: {
    label: 'Button',
    colors: 'default',
    view: 'text',
    ariaLabel: '',
    disabled: false,
    type: 'button',
    className: '',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    colors: 'default',
    view: 'primary',
    ariaLabel: '',
    disabled: true,
    type: 'button',
  },
};
