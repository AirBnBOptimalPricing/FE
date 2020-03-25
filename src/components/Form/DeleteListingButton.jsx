import React from 'react';
import { mdiTrashCanOutline } from '@mdi/js';
import Icon from '@mdi/react';

const DeleteListingButton = ({ className = '', icon = true }) => {
    const display = icon ? <Icon path={mdiTrashCanOutline} /> : 'delete';
    return (
        <div className={`${className} button delete`.trim()}>
            {icon ? display : display.toUpperCase()}
        </div>
    );
};

export default DeleteListingButton;
