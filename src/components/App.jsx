import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddListing, PrivateRoute, UpdateListing, Login, Register, Listing, Navigation } from './';

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Switch>
            <Route exact path="/" component={Listing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                {/* will have a separate router underneath of it */}
                <Route path="/property" exact>
                    <div>Properties</div>
                </Route>
                <PrivateRoute
                    path="/property/new"
                    exact
                    component={AddListing}
                />
                <Route path="/property/:id" exact>
                    <div>Property</div>
                </Route>
                <PrivateRoute
                    path="/property/:id/edit"
                    component={UpdateListing}
                />
            </Switch>
        </div>
    );
}

export default App;
