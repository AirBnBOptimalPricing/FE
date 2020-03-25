import React from 'react';
import {
  CardColumns,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Button,
} from 'reactstrap';
import ListingPage from './ListingPage';

const Listing = () => {
  return <div>
    <ListingPage/>
    <div className="cards-wrapper">
        <CardColumns>
            <Card >
              <CardBody>
                <CardTitle>
                  Name: name of listing
                </CardTitle>
                <CardText>
                  Nr of guest, beds, baths
                </CardText>
                <CardText>
                 price
                </CardText>
                <Button>View Listing</Button>
              </CardBody>
            </Card>       
        </CardColumns>
      </div>
  </div>;
};

export default Listing;
