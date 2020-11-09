import React from 'react';
import { Form } from './Form';

export default {
    title: 'Example/Form',
    component: Form,
};

const Template = ({ children, ...args }) => <Form {...args} >{children}</Form>;

export const Default = Template.bind({});
Default.args = {
};

