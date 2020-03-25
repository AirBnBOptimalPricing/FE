import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddListing, PrivateRoute, UpdateListing } from './';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/login" render={() => <div>Login</div>} />
                <Route path="/register" render={() => <div>Register</div>} />
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
