import React from 'react';

// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  render: () => <Footer />,
} as Meta;

export const Default: StoryObj = {
  render: () => <Footer />,
};
