import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PersonItem from '../components/PersonItem';

export default {
  title: 'PersonItem',
  component: PersonItem,
} as ComponentMeta<typeof PersonItem>;

const Template: ComponentStory<typeof PersonItem> = (args) => (
  <PersonItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: 'Surender Lohia',
  accessType: 'no-access',
  handleSelectPerson: () => {},
};
