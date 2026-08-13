import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { Input } from './input';
import styles from './input.module.css';
import type { InputProps } from './types';

const DEFAULT_INPUT_PROPS: InputProps = {
  value: '',
  label: '',
  error: '',
  description: '',
  size: 'medium',
  view: 'default',
  type: 'text',
  disabled: false,
  placeholder: 'placeholder',
  dataTestId: 'input',
  inputClassName: 'inputClassName',
  labelClassName: 'labelClassName',
  descriptionClassName: 'descriptionClassName',
  onChange: fn(),
};

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  args: DEFAULT_INPUT_PROPS,
  argTypes: {
    type: {
      control: 'text',
      description:
        'Native input type, for example text, password, email, or search.',
      table: { defaultValue: { summary: 'text' } },
    },
    value: {
      control: 'text',
      description: 'Controlled input value rendered inside the field.',
    },
    size: {
      control: 'radio',
      description: 'Input size preset that controls height and padding.',
      table: { defaultValue: { summary: 'medium' } },
    },
    view: {
      control: 'radio',
      description: 'Visual state of the input: default or error.',
      table: { defaultValue: { summary: 'default' } },
    },
    label: {
      control: 'text',
      description: 'Text label associated with the input.',
    },
    error: {
      control: 'text',
      description:
        'Error message displayed below the input and switches the field to error state.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input and applies the disabled visual state.',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when the input value is empty.',
    },
    description: {
      control: 'text',
      description:
        'Helper text displayed below the input when there is no error.',
    },
    dataTestId: {
      control: 'text',
      description: 'Test id attribute value used to query the input in tests.',
    },
    labelClassName: {
      control: 'text',
      description: 'Additional class name applied to the input label wrapper.',
    },
    inputClassName: {
      control: 'text',
      description:
        'Additional class name applied directly to the native input element.',
    },
    descriptionClassName: {
      control: 'text',
      description: 'Additional class name applied to the helper text element.',
    },
    onChange: {
      type: 'function',
      description: 'Callback fired when the input value changes.',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputClassName: 'inputClassName',
  },
  play: async ({ canvas, args }) => {
    const input = canvas.getByTestId(args.dataTestId!);

    expect(input).toBeVisible();
    expect(input).toHaveAttribute('placeholder', args.placeholder);
    expect(input).toHaveClass(styles.sizeMedium);
    expect(input).toHaveClass(args.inputClassName!);
    expect(input).not.toBeDisabled();
  },
};

export const Description: Story = {
  args: { description: 'description' },
  play: async ({ canvas, args }) => {
    const description = canvas.getByTestId(`${args.dataTestId}-description`!);

    expect(description).toBeVisible();
    expect(description).toHaveTextContent(args.description!);
    expect(description).toHaveClass(args.descriptionClassName!);
  },
};

export const Label: Story = {
  args: { label: 'label' },
  play: async ({ canvas, args }) => {
    const label = canvas.getByTestId(`${args.dataTestId}-label`!);

    expect(label).toBeVisible();
    expect(label).toHaveTextContent(args.label!);
    expect(label).toHaveClass(args.labelClassName!);
  },
};

export const Small: Story = {
  args: { size: 'small' },
  play: async ({ canvas, args }) => {
    const input = canvas.getByTestId(args.dataTestId!);

    expect(input).toHaveClass(styles.sizeSmall);
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas, args }) => {
    const input = canvas.getByTestId(args.dataTestId!);

    expect(input).toBeDisabled();
  },
};

export const Error: Story = {
  args: {
    view: 'error',
    error: 'error message',
  },
  play: async ({ canvas, args }) => {
    const input = canvas.getByTestId(args.dataTestId!);
    const error = canvas.getByTestId(`${args.dataTestId}-error-description`);

    expect(input).toBeVisible();
    expect(input).toHaveClass(styles.viewError);
    expect(input).toHaveAttribute('aria-invalid', 'true');

    expect(error).toBeVisible();
    expect(error).toHaveTextContent(args.error!);
    expect(error).toHaveClass(styles.error);
  },
};

export const Full: Story = {
  args: {
    description: 'description',
    label: 'label',
  },
  play: async ({ canvas, args, userEvent }) => {
    const input = canvas.getByTestId(args.dataTestId!);
    const label = canvas.getByTestId(`${args.dataTestId}-label`);
    const description = canvas.getByTestId(`${args.dataTestId}-description`);

    expect(label).toBeVisible();
    expect(label).toHaveTextContent(args.label!);
    expect(label).toHaveClass(args.labelClassName!);

    expect(input).toBeVisible();
    expect(input).toHaveDisplayValue(args.value!);
    expect(input).toHaveAttribute('placeholder', args.placeholder);
    expect(input).toHaveClass(styles.sizeMedium);
    expect(input).toHaveClass(styles.viewDefault);
    expect(input).toHaveClass(args.inputClassName!);
    expect(input).not.toBeDisabled();

    expect(description).toBeVisible();
    expect(description).toHaveTextContent(args.description!);
    expect(description).toHaveClass(args.descriptionClassName!);

    const inputTestValue = 'value';

    await userEvent.type(input, inputTestValue);

    expect(args.onChange).toHaveBeenCalledTimes(inputTestValue.length);
    expect(input).toHaveDisplayValue(inputTestValue);
  },
};
