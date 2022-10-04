import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { groups, persons } from './../components/Share/data';
import Share from './../components/Share';

export default {
  title: 'Share',
  component: Share,
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = (args) => <Share {...args} />;

export const Default = Template.bind({});
Default.args = {
  persons,
  groups,
};
