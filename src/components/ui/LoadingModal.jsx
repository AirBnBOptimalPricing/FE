import React from 'react';
import { Modal, Loader } from '../';
import { connect } from 'react-redux';

const LoadingModal = ({
    text = 'Sending request...',
    authLoading,
    propertyLoading,
}) => {
    const show = authLoading || propertyLoading ? 'show' : '';
    return (
        <Modal className={`loading ${show}`}>
            <div className={`loading-container ${show}`}>
                <Loader />
                {text}
            </div>
        </Modal>
    );
};

const mapStateToProps = ({
    auth: { isLoading: authLoading },
    property: {
        status: { isLoading: propertyLoading },
    },
}) => ({ authLoading, propertyLoading });

export default connect(mapStateToProps, {})(LoadingModal);
