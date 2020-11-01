import React from 'react';
import { Table } from './Table';

export default {
    title: 'Example/Table',
    component: Table,
};

const Template = ({ ...args }) => <Table {...args} ></Table>;

const headings = ["Name", "Weight"];
const body = [
    ["Item", "Item Weight"],
    ["Item2", "Item2 Weight"]
];

export const Default = Template.bind({});
Default.args = {
    headings: headings,
    body: body
};
