import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/actionCreators';

const Backdrop = ({ modalName, toggleModal, authLoading, propertyLoading }) => {
    const clickHandler = () => {
        return authLoading || propertyLoading || !modalName
            ? null
            : toggleModal(modalName);
    };

    return <div className="backdrop" onClick={clickHandler}></div>;
};

const mapStateToProps = ({
    auth: { isLoading: authLoading },
    property: {
        status: { isLoading: propertyLoading },
    },
}) => ({ authLoading, propertyLoading });

export default connect(mapStateToProps, { toggleModal })(Backdrop);
