import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    label: 'Select Option',
  },
};

export const WithHelperText: Story = {
  args: {
    options: defaultOptions,
    label: 'Select Option',
    helperText: 'Choose one option from the list',
  },
};

export const WithError: Story = {
  args: {
    options: defaultOptions,
    label: 'Select Option',
    error: true,
    helperText: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    label: 'Select Option',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    options: defaultOptions,
    label: 'Select Option',
    fullWidth: true,
  },
};