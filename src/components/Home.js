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
            <App />
            <Logout auth={props.auth}/>
            </div>)
            :
            (<div>
            <Login auth={props.auth}/>
 
            </div>)
        }
    </div>
);

export default Home;