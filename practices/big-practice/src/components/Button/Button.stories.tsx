// Types
import type { Meta, StoryObj } from '@storybook/react';
import type { ButtonProps } from './Button';

// Components
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  render: (args) => (<Button {...args}>Click me</Button>)
} as Meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    variant: 'default'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
}

export const Link: Story = {
  args: {
    variant: 'link',
  }
}

export const Disabled: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
    className: 'cursor-not-allowed'
  }
}

export const IconButton: Story = {
  render: () => (
    <Button variant='outline' size='icon'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </Button>
  )
}

export const SmallButton: Story = {
  args: {
    variant: 'default',
    size: 'sm'
  }
}

export const LargeButton: Story = {
  args: {
    variant: 'default',
    size: 'lg'
  }
}

export const FullButton: Story = {
  args: {
    variant: 'default',
    size: 'xl'
  }
}
