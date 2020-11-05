import React from 'react';
import { Dropdown } from './Dropdown';

export default {
    title: 'Example/Dropdown',
    component: Dropdown,
};

const Template = ({ children, ...args }) => <Dropdown {...args} >{children}</Dropdown>;

const options = {
    "1": "Option 1",
    "2": "Option 2"
}

export const Default = Template.bind({});
Default.args = {
    label: "I'm a Dropdown",
    options: options,
    placeholder: "-"
};

