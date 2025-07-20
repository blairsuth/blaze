import type { Meta, StoryObj } from '@storybook/react-vite';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import Button from './Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <CardContent>Basic card content</CardContent>,
  },
};

export const CompleteExample: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description of the card content.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. It can contain any elements you need.</p>
      </CardContent>
      <CardFooter>
        <Button variant="text">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithElevation: Story = {
  args: {
    elevation: 3,
    children: <CardContent>Card with elevation level 3</CardContent>,
  },
};

export const Outlined: Story = {
  args: {
    outlined: true,
    children: <CardContent>Outlined card variant</CardContent>,
  },
};