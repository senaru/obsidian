import React from 'react';

import { Toast } from './Toast';

export default {
    title: 'Example/Toast',
    component: Toast,
};

const Template = ({ children, ...args }) => <Toast {...args} >{children}</Toast>;

export const Default = Template.bind({});
Default.args = {
    children: "I'm the Content Inside",
    header: "I'm a Toast"
};

export const Info = Template.bind({});
Info.args = {
    children: "I'm the Content Inside",
    header: "I'm a Toast",
    variant: "info"
};
