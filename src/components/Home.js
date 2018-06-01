import React from 'react';
import App from '../App';
import Login from './Login';
import Logout from './Logout';

const Home = props => (
    <div>
        {
            props.auth.isAuthenticated()
            ?
            (<div>
            <App auth={props.auth}/>
            <Logout auth={props.auth} pos={{position: 'absolute', top:'10px', right: '10px'}}/>
            </div>)
            :
            (<div>
            <Login auth={props.auth}/>
 
            </div>)
        }
    </div>
);

export default Home;