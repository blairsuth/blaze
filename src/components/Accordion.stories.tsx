import type { Meta, StoryObj } from '@storybook/react-vite';

import Accordion from './Accordion';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: []
  }
};