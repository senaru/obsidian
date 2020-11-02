import React from 'react';

import { Modal } from './Modal';

export default {
    title: 'Example/Modal',
    component: Modal,
};

const Template = ({ children, ...args }) => <Modal {...args} >{children}</Modal>;

export const Default = Template.bind({});
Default.args = {
    children: "I'm the Content Inside the Modal",
    header: "I'm a Modal",
    buttonText: "Click Me"
};
