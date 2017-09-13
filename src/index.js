import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { Router, Route } from 'react-router-dom';
import { firebaseApp } from './firebase';

import App from './components/App.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import history from './history';
import reducer from './reducers';
import { logUser } from './actions';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed in or up', user);
        const { email } = user;
        store.dispatch(logUser(email));
        history.push('/app');
    } else {
        console.log('user has signed out or still needs to sign in.');
        history.push('/signin');
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={history}>
            <Switch>
                <Route path="/app" component={App} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);