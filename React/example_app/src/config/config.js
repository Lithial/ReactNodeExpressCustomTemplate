/*
* This config file pulls data out of the .env file in order to keep
* this information secret. This will include things like port values, api
* endpoints for obfuscation and database passwords and logins.
*/
export const NODE_ENDPOINT = process.env.REACT_APP_ENDPOINT;
export const PORT = process.env.REACT_APP_PORT;
export const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
export const AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE;
export const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;

export const DEV_MODE = true;