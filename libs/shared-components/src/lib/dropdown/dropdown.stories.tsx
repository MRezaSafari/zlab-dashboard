import {
  Meta,
  Story,
} from '@storybook/react/types-6-0';
import { IDropdownProps } from '@zlab/shared-models';

import Dropdown from './dropdown';

export default {
  title: 'UI Components',
  component: Dropdown,
} as Meta;

const Template: Story<IDropdownProps> = ({ options, onChange, minimumSearchLength }: IDropdownProps) => (
  <Dropdown
    onChange={onChange}
    options={options}
    minimumSearchLength={minimumSearchLength}
  />
);

export const primary = Template.bind({});
primary.args = {
  options: [
    { id: 1, label: 'Kassulke & Sohn', value: 'Kassulke & Sohn' },
    { id: 2, label: 'Bayer-Bergnaum', value: 'Bayer-Bergnaum' },
    { id: 3, label: 'Schinner Group', value: 'Schinner Group' },
  ],
  onChange: (value: string) => {
    console.log(value);
  },
  minimumSearchLength: 0,
};
primary.storyName = 'Dropdown';
