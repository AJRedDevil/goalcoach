import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

ReactDOM.render(
    <Router path="/">
        <Switch>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    </Router>,
    document.getElementById('root')
);