import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddListing, PrivateRoute, Login, Register } from './';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/login"  component = { Login}  />
                <Route path="/register" component = { Register} />
                {/* will have a separate router underneath of it */}
                <PrivateRoute
                    path="/property/new"
                    exact
                    component={AddListing}
                />
                <Route
                    path="/property"
                    component={() => (
                        <div>
                            {/* will have a separate router inside of it */}
                            Properties
                        </div>
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;
