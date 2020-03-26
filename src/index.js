import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import { App } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
=======
import { Provider } from 'react-redux';
import { store } from './redux/store';
>>>>>>> 468457b5a344d350c4b6cc79119e6357025011f0

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
