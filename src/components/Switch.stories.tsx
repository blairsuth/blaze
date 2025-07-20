import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Default Switch',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Switch',
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Notifications',
    helperText: 'Receive email notifications',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Switch',
    disabled: true,
    checked: true,
  },
};