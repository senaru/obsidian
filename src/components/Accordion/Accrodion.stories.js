import React from 'react';

import { Accordion } from './Accordion';

export default {
    title: 'Example/Button',
    component: Accordion,
};

const Template = ({ children, ...args }) => <Accordion {...args} >Button</Accordion>;

export const Default = Template.bind({});
Default.args = {
};

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
};

