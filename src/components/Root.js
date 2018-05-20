import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from '../Authorisation/Auth';
import history from '../Authorisation/history';
import App from '../App';
import Callback from '../Callback/Callback';

const auth = new Auth();

const Root = () => (
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path='/' render={ () => <Home auth={auth} /> } />
            <Route path='/callback' component={Callback} />
        </Switch>
    </BrowserRouter>
)

const Home = props => (
    <div>
        {
            !props.auth.isAuthenticated()
            ?
            <App />
            :
            <Callback />
        }
    </div>
);

export default Root;