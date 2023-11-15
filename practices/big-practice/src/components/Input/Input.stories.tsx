// Types
import type { Meta, StoryObj } from '@storybook/react';
import type { InputProps } from './Input';

// Components
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  render: (args) => <Input {...args} />,
} as Meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Text input',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};
