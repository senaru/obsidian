import React from 'react';
import { Tab } from './Tab';

export default {
    title: 'Example/Tab/Tab',
    component: Tab,
};

const Template = ({ children, ...args }) => <Tab {...args} >{children}</Tab>;
const tabs = [["id", "displayName"], ["id2", "displayName2"]]
export const Default = Template.bind({});
Default.args = {
    tabs: tabs
};