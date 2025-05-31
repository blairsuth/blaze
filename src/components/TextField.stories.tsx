import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { Mail, Lock, Search } from 'lucide-react';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We\'ll never share your email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: true,
    helperText: 'Password must be at least 8 characters',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    leadingIcon: <Mail size={18} />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    trailingIcon: <Lock size={18} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leadingIcon: <Search size={18} />,
    trailingIcon: <Lock size={18} />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
};