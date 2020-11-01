import React from 'react';

import { Accordion } from './Accordion';

export default {
    title: 'Example/Checkbox',
    component: Accordion,
};

const Template = ({ children, ...args }) => <Accordion {...args} >{children}</Accordion>;

export const Default = Template.bind({});
Default.args = {
    children: "I'm the Content Inside",
    header: "I'm an Accordion"
};

