import React from 'react';

import { List } from './List';

export default {
    title: 'Example/List',
    component: List,
};

const Template = ({ children, ...args }) => <List {...args} >{children}</List>;

const listItems = ["Item1", ["Item2.1", "Item 2.2"], "Item3"]

export const Unordered = Template.bind({});
Unordered.args = {
    items: listItems,
};

export const Ordered = Template.bind({});
Ordered.args = {
    items: listItems,
    listType: "ordered",
    subListType: "ordered"
};
