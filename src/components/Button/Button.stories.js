import React from 'react';

import { Button } from './Button';

export default {
    title: 'Example/Button',
    component: Button,
};

const Template = ({ children, ...args }) => <Button {...args} >Button</Button>;

export const Default = Template.bind({});
Default.args = {
};

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
};

