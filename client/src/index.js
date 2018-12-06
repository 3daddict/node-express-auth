import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';

ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Welcome} />
            <Route path="/signup" component={Signup} />
        </App>
    </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
