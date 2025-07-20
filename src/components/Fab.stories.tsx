import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fab } from './Fab';
import { Plus, Heart, Edit } from 'lucide-react';

const meta = {
  title: 'Components/Fab',
  component: Fab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <Plus />,
    'aria-label': 'Add',
  },
};

export const Secondary: Story = {
  args: {
    icon: <Heart />,
    color: 'secondary',
    'aria-label': 'Favorite',
  },
};

export const Tertiary: Story = {
  args: {
    icon: <Edit />,
    color: 'tertiary',
    'aria-label': 'Edit',
  },
};

export const Small: Story = {
  args: {
    icon: <Plus />,
    size: 'small',
    'aria-label': 'Add',
  },
};

export const Large: Story = {
  args: {
    icon: <Plus />,
    size: 'large',
    'aria-label': 'Add',
  },
};

export const Extended: Story = {
  args: {
    icon: <Plus />,
    extended: true,
    label: 'Create',
  },
};