import React from 'react';
// import {
//     CardColumns,
//     Card,
//     CardTitle,
//     CardText,
//     CardBody,
//     Button,
//     CardImg,
// } from 'reactstrap';
// import { useHistory } from 'react-router-dom';
// import ListingPage from './ListingPage';
import { connect } from 'react-redux';
import { PropertyCard } from '../';
import { getProperties } from '../../redux/actionCreators';

const Listing = ({ list, status, getProperties }) => {
    // useEffect(() => {
    //     // requires fix from BE to stop using cookies
    //     getProperties();
    // }, []);
    // const history = useHistory();

    // const routeToListing = e => {
    //     e.preventDefault();
    //     history.push(`/listing/${listing.id}`);
    // };
    const propertyCards = Object.values(list).map(property => (
        <PropertyCard {...property} key={property.id} />
    ));

    return (
        <div>
            {propertyCards}

            <div className="cards-wrapper">
                {/* this component will be rendered after the user cliks on "view Listing"  
    it is here temporarly for the construction. 
    The url will need an Id to access the page*/}
                {/* commented out your code to test property card component */}
                {/* <ListingPage />
                <CardColumns>
                    <Card>
                        <CardBody>
                            <div className="card-img">
                                <CardImg
                                    src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                    alt="Card image cap"
                                />
                            </div>
                            <CardTitle>Name: name of listing</CardTitle>
                            <CardText>Nr of guest, beds, baths</CardText>
                            <CardText>price</CardText>
                            <Button onClick={routeToListing}>
                                View Listing
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <div className="card-img">
                                <CardImg
                                    src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                    alt="Card image cap"
                                />
                            </div>
                            <CardTitle>Name: name of listing</CardTitle>
                            <CardText>Nr of guest, beds, baths</CardText>
                            <CardText>price</CardText>
                            <Button onClick={routeToListing}>
                                View Listing
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <div className="card-img">
                                <CardImg
                                    src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                    alt="Card image cap"
                                />
                            </div>
                            <CardTitle>Name: name of listing</CardTitle>
                            <CardText>Nr of guest, beds, baths</CardText>
                            <CardText>price</CardText>
                            <Button onClick={routeToListing}>
                                View Listing
                            </Button>
                        </CardBody>
                    </Card>
                </CardColumns> */}
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
