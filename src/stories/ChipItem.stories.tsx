import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChipItem from '../components/ChipItem';

export default {
  title: 'ChipItem',
  component: ChipItem,
} as ComponentMeta<typeof ChipItem>;

const Template: ComponentStory<typeof ChipItem> = (args) => (
  <ChipItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Suren',
  id: 1,
};
