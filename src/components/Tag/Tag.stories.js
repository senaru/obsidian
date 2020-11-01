import React from 'react';
import { Tag } from './Tag';

export default {
    title: 'Example/Tag',
    component: Tag,
};

const Template = ({ children, ...args }) => <Tag {...args} >{children}</Tag>;

export const Default = Template.bind({});
Default.args = {
    children: "Default Tag",
    variant: "default"
};

export const Primary = Template.bind({});
Primary.args = {
    children: "Primary Tag",
    variant: "primary"
};
