import React from 'react';
import { Backdrop } from '..';
const Modal = ({ className = '', children }) => {
    return (
        <div className={`${className} modal`.trim()}>
            <Backdrop />
            {children}
        </div>
    );
};

export default Modal;
