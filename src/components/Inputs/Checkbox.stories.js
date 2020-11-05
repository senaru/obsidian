import React from 'react';
import { Checkbox } from './Checkbox';

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
};

const Template = ({ children, ...args }) => <Checkbox {...args} >{children}</Checkbox>;

export const Default = Template.bind({});
Default.args = {
    children: "I'm a Checkbox"
};

