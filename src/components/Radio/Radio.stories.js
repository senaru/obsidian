import React from 'react';
import { Radio } from './Radio';

export default {
    title: 'Example/Radio',
    component: Radio,
};

const Template = ({ children, ...args }) => <Radio {...args} >{children}</Radio>;

export const Default = Template.bind({});
Default.args = {
    children: "I'm a Radio"
};