import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from 'reactstrap';
const ListingPage = () => {
return (
    <div>
        <Card>
            <CardBody >
            <CardImg  src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
               <div className="card-info">
               <div className ="edit-div">
                    <CardTitle>Title: </CardTitle>  
                   <div>
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash"></i>
                   </div>
                </div>
                <CardSubtitle>Address: city, state, zip </CardSubtitle>
                <CardSubtitle>Nr of guests, beds, baths </CardSubtitle>
                <CardSubtitle>Description:propertyType and floors </CardSubtitle>
                <CardSubtitle>Amenities: </CardSubtitle>
                <CardSubtitle>Price: </CardSubtitle>
               </div>
            </CardBody>
    </Card>
    </div>
)
}
export default ListingPage;