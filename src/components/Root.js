import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Auth from '../Authorisation/Auth';
import history from '../Authorisation/history';
import App from '../App';
import Callback from '../Callback/Callback';
import Header from './Header';
import Login from './Login';
import Logout from './Logout';

const auth = new Auth();

const handleCallback = (props) => {
    if (/access_token|id_token|error/.test(props.location.hash)){
        auth.handleAuthentication();
    }
}

const Root = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' render={ () => <Home auth={auth} /> } />
            <Route path='/callback' render={ (props) => {
                handleCallback(props);
                return (<Callback {...props}/>)
                }} />
        </Switch>
    </Router>
)

const Home = props => (
    <div>
        {
            props.auth.isAuthenticated()
            ?
            (<div>
            <App />
            <Logout auth={auth}/>
            </div>)
            :
            (<div>
            <Login auth={auth}/>
            <Logout auth={auth}/>
            </div>)
        }
    </div>
);

export default Root;