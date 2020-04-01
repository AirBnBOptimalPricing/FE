import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => { 
    const history = useHistory(); 
    return (
        <div className="home">
            <div className="home-text">
                <h1 style={{"font-size":"50px"}}>Welcome to AirBnB Optimal</h1>
                <h2>We will help you host your home and suggest the optimal price for listing! </h2>
                <button onClick={()=> history.push('/register')}>SignUp today</button>
            </div>
        </div>
    )
};
export default Home;