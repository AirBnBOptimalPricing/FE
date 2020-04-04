import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { withAuth } from '../.././util'
import {
        Card,
        CardImg,
        CardBody,
        CardTitle,
        CardSubtitle,
      } from 'reactstrap';
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

const ListingPage = () => {
    const [data, setData]=useState(initialState);

    console.log(data,"data")
    const { id } = useParams();

    // useEffect(()=>{
    //     async function fetchData() {
    //         const response = await withAuth(`/user/${id}`, 'get')
    //         setData(response)
    //         console.log("hereeee", response)
    //     }
    //     fetchData();
    // }, [id])
  
    useEffect(() => {
       withAuth(`/user/${id}`, 'get')
          .then((response) => {
         console.log("here is the response.data in ListingPage", response.data)
          setData(response.data)
          })
          .catch((err) => (err));
      }, [id]);

    return (
        <div>
         <div>Card development in process</div>
           {data.properties.map((item)=>(  
            <div>
                {item.map((x)=>(
                <Card>
                    <CardBody className="card-listing" >
                        <div className="card-image">
                            <CardImg  src="https://images.unsplash.com/photo-1538685634737-24b83e3fa2f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="Card image cap" />
                        </div>
                        <div className="card-info">
                            <div className ="edit-div">
                            <CardTitle>Title:{x.address}</CardTitle>  
                                <div>
                                    <i class="fa fa-edit"></i>
                                    <i class="fa fa-trash"></i>
                                </div>
                                </div>
                        <CardSubtitle>Address: {x.city}, {x.state}, {x.zip} </CardSubtitle> 
                            <CardSubtitle>Nr of guests, beds, baths </CardSubtitle>
                            <CardSubtitle>Description:ListingPageType and floors </CardSubtitle>
                            <CardSubtitle>Amenities: </CardSubtitle>
                            <CardSubtitle>Price: </CardSubtitle>
                        </div>
                    </CardBody>
                </Card>
               ))}
            </div>
            ))} 
        </div> 
    )
};
export default ListingPage;
