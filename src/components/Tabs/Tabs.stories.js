import React from 'react';
import { Tab } from './';

export default {
    title: 'Example/Tab',
    component: Tab,
};

const Template = ({ children, ...args }) => <Tab {...args} >{children}</Tab>;

export const Default = Template.bind({});
Default.args = {
    children: "I'm the Content Inside",
    header: "I'm a Tab"
};

export const Info = Template.bind({});
Info.args = {
    children: "I'm the Content Inside",
    header: "I'm a Tab",
    variant: "info"
};
