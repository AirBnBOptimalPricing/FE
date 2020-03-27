import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/actionCreators';

const Backdrop = ({ modalName, toggleModal }) => {
    return (
        <div className="backdrop" onClick={() => toggleModal(modalName)}></div>
    );
};

export default connect(null, { toggleModal })(Backdrop);
