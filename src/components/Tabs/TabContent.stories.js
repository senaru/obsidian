import React from 'react';
import { TabContent } from './TabContent';

export default {
    title: 'Example/Tab/Tab Content',
    component: TabContent,
};

const Template = ({ children, ...args }) => <TabContent {...args} >{children}</TabContent>;

export const Default = Template.bind({});
Default.args = {
    id: "id",
    active: true
};