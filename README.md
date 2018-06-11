## Image-survey
Front end client app for a study into interoperator variability when interpreting vascular ultrasound images<br/>
The long-term goal is to develop an application that will allow researchers to quickly and easily carry out similar studies,
helping to standardise interpretation of medical imaging and improve outcomes.<br/>
<br/>
## Built With 
+ React
+ Redux-Saga
+ Auth0
## Getting Started
After cloning the repo and running `npm install`, you will need to create a `src/api_config.js` to export `API_URL` and `IMAGE_URL` consts for the backend server(s) that will be consumed.  For an example backend, see 'image-survey-backend' repo.<br/>
Next, create a `src/Authorisation/Auth_config.js` file to export an `AUTH_CONFIG` object with your Auth0 variables (domain, client_id, redirect_uri, and audience).<br/>
Start the dev server with `npm run dev`.  