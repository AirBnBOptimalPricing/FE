import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropertyCard } from '../';
import { getProperties } from '../../redux/actionCreators';

const Listing = ({ list, status, getProperties }) => {
    useEffect(() => {
        //     // requires fix frgetPropertiesom BE to stop using cookies
        getProperties();
        // eslint-disable-next-line
    }, []);

    let [refresh, forceRefresh] = useState(0);
  
    const propertyCards = Object.values(list).map(property => (
        <PropertyCard
            {...property}
            key={property.id}
            refresh={() => forceRefresh(refresh++)}
        />
    ));

    return (
        <div>
           <h3 className="form-header">Stays in Berlin</h3>
            {propertyCards}
            <div className="cards-wrapper">
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        list: { ...state.property.list },
        status: { ...state.property.status },
    };
};

export default connect(mapStateToProps, { getProperties })(Listing);
