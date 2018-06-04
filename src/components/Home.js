import React from 'react';
import App from '../containers/App';
import Login from './Login';
import Logout from './Logout';

/* I should use router instead of this goofy component-as-a-switch thing */
const Home = props => (
    <div /*style={{backgroundImage: `url(${require("../images/calcium.jpg")})`, 
                 backgroundSize: 'cover',
                 height: '100vh'}}*/ >
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