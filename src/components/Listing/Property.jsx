import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { getSingleProperty, deleteProperty } from '../../redux/actionCreators';
import { useParams, useHistory } from 'react-router-dom';
import { withAuth } from '../.././util'

const initialState = {
    id: '',
    firstName:'',
    lastName: '',
    email: '',
    password:'',
    properties:[
        {
            id: '',
            address: '',
            city:'',
            state: '',
            zip: '',
            description:'',
            children_allowed: false,
            property_type: '',
            bedrooms_number: '',
            bathrooms_number:'',
            amenities: '',
            price: '',
            user_id: ''
        }
    ]
 }
const Property = (props) => {
    //     className = '',
    //     match: {
    //         params: { id },
    //     },
    //     history,
    //     loggedInAs,
    //     getSingleProperty,
    //     active: {
    //         id: propertyId,
    //         address,
    //         city,
    //         state,
    //         zip,
    //         description,
    //         canHaveChildren,
    //         propertyType,
    //         floors,
    //         beds,
    //         baths,
    //         // amenities,
    //         price,
    //         user_id: owner,
    //         deleteProperty,
    //     },
    // }) => {
    // const {
    //     id: propertyId,
    //     address,
    //     city,
    //     state,
    //     zip,
    //     description,
    //     canHaveChildren,
    //     propertyType,
    //     floors,
    //     beds,
    //     baths,
    //     // amenities,
    //     price,
    //     owner,
    // } = list[id]; // the way list is set up this is how to extract property

    // useEffect(() => {
    //     getSingleProperty(id);
    //     // eslint-disable-next-line
    // }, []);

    // const deletePropertyonClick = () => {
    //     deleteProperty(id).then(() => {
    //         history.push('/property');
    //     });
    // };
    const [data, setData]=useState(initialState);
    console.log(data,"data")
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
       withAuth(`/user/${id}`, 'get')
          .then((response) => {
         console.log("hereeee", response.data)
          setData(response.data)
          })
          .catch((err) => (err));
      }, [id]);


    return (
       <div className="card-container">
            <h3 className="form-header">Other listings posted by {data.firstName} {data.lastName}</h3>
            {data.properties.map((item)=> (
                <div 
                className={`${props.className} property listing`.trim()}
                //onClick={() => history.push(`/listing/${item.id}/`)}
                >
                    <img
                        src="https://images.unsplash.com/photo-1538685634737-24b83e3fa2f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                        alt="placeholder"
                    />
                    <h2 className="price">&euro;{item.price}</h2>
                    <header>

                        <h4>{item.address} </h4>
                        <div>{`${item.city}, ${item.state}, ${item.zip}`}</div>
                    </header>
                    <section className="body">
                        <div className="description">Description: {item.description}</div>
                        <div className="children separate">
                            <p>Children allowed:</p>
                            <p> {item.children_allowed ? 'Yes' : 'No'}</p>
                        </div>
                        <div className="property-type separate">
                            <p>Property type:</p> <p>{item.property_type}</p>
                        </div>
                        <div className="beds separate">
                            <p>Beds:</p>
                            <p>{item.bedrooms_number}</p>
                        </div>
                        <div className="baths separate">
                            <p>Baths:</p>
                            <p>{item.bathrooms_number}</p>
                        </div>
                        <div className="baths separate">
                            <p>Listing ID nr:</p>
                            <p> {item.id}</p>
                        </div>
                        <div className="name separate">
                            <p>User Name:</p>
                            <p> {data.firstName}</p>
                        </div>
                        <div className="id separate">
                            <p>User ID nr:</p>
                            <p> {item.user_id}</p>
                        </div>
                    </section>
                    {/* {owner === loggedInAs.id && (
                        <div className="property-controls">
                            <div
                                className="edit"
                                onClick={e => {
                                    e.stopPropagation();
                                    history.push(`/property/${id}/edit`);
                                }}>
                                Edit
                            </div>
                            <div className="delete" onClick={deletePropertyonClick}>
                                Delete
                            </div>
                        </div>
                    )} */}
            </div>
        ))}
       </div>
    );
};

export default Property;

// const mapStateToProps = ({
//     property: { active },
//     auth: {
//         user: { loggedInAs },
//     },
// }) => ({
//     active,
//     loggedInAs,
// });

// export default connect(mapStateToProps, { getSingleProperty, deleteProperty })(
//     Property,
// )

