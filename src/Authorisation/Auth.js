import history from './history';
import auth0 from 'auth0-js';
import {AUTH_CONFIG} from './Auth_config';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.redirectUri,
    audience: AUTH_CONFIG.audience,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, res) => {
      if(res) {
        console.log(`heres the result object from parseHash: ${JSON.stringify(res)}`)
        localStorage.setItem('access_token', res.accessToken);/* (method) Storage.setItem(key: string, value: string): void*/
        localStorage.setItem('id_token', res.idToken);
        localStorage.setItem(
          'expires_at',
          JSON.stringify((res.expiresIn * 1000) + new Date().getTime())
        );
        history.replace('/');
      } else if (err) {
        console.log(JSON.stringify(`heres an error from autho.parseHash in handleAuthentication ${err}`));
        history.replace('/');
      }
    })
}; 

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('state');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
