// // Using ES6 modules
// import 'cross-fetch/polyfill';
// import AmazonCognitoIdentity from 'amazon-cognito-identity-js';

// // Or, using CommonJS modules
// require('cross-fetch/polyfill');
// var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js"; 


export let appConfig = {
    region: 'ap-northeast-2',
    IdentityPoolId: '',
    UserPoolId: 'ap-northeast-2_qCjWAmKqw',
    ClientId: '2lps1llva1t5bkbe5g16qbb2cs',    
}

Config.region = appConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
});

export const userPool = new CognitoUserPool({
    UserPoolId: appConfig.UserPoolId,
    ClientId: appConfig.ClientId,
  });

  

// export const attributeList = [
//     new CognitoUserAttribute({
//       Name: 'email',
//       Value: email,
//     })
//   ];

export default Config;
