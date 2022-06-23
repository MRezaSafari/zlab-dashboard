import {
  Meta,
  Story,
} from '@storybook/react/types-6-0';

import Button from './button';

export default {
  title: 'UI Components',
  component: Button,
} as Meta;

const Template: Story = ({ children }) => <Button>{children}</Button>;

export const primary = Template.bind({});
primary.args = { children: 'Custom Button' };
primary.storyName = 'Button';
