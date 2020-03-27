import React from 'react';
import { Backdrop } from '..';
const Modal = ({ className = '', children, modalName }) => {
    return (
        <div className={`${className} modal`.trim()}>
            <Backdrop modalName={modalName} />
            {children}
        </div>
    );
};

export default Modal;
