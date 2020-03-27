import React from 'react';
import { Backdrop } from './';
const Modal = ({ className = '' }) => {
    return (
        <div className={`${className} modal`.trim()}>
            <Backdrop />
        </div>
    );
};

export default Modal;
