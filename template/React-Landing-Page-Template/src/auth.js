import { Config, CognitoIdentityCredentials } from "aws-sdk";
import {
    CognitoUserPool,
    CognitoUser,
    AuthenticationDetails,
} from "amazon-cognito-identity-js"

import { appConfig } from "./cognito"

const userPool = new CognitoUserPool({
    UserPoolId: appConfig.UserPoolId,
    ClientId: appConfig.ClientId,
})
export function signIn(username, password) {
    return new Promise((resolve, reject) => {
        const authenticationDetails = new AuthenticationDetails({
            Username: username,
            Password: password,
        })

        const cognitoUser = new CognitoUser({
            Username: username,
            Pool: userPool,
        })

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                resolve(result)
                console.log(result)
            },
            onFailure: (err) => {
                reject(err)
                console.log(err)
            },
            newPasswordRequired:
        })
    })
}

export function getSession() {
    const cognitoUser = userPool.getCurrentUser()
    return new Promise((resolve, reject) => {
        if (!cognitoUser) {
            reject(new Error("No user found"))
            return
        }
        cognitoUser.getSession((err, session) => {
            if (err) {
                reject(err)
                return
            }
            resolve(session)
        })
    })
}

export async function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const cognitoUser = userPool.getCurrentUser()
        console.log(cognitoUser)
        if (!cognitoUser) {
            reject(new Error("No user found"))
            return
        }

        cognitoUser.getSession((err, session) => {
            if (err) {
                reject(err)
                return
            }
            cognitoUser.getUserAttributes((err, attributes) => {
                if (err) {
                    reject(err)
                    return
                }
                const userData = attributes.reduce((acc, attribute) => {
                    acc[attribute.Name] = attribute.Value
                    return acc
                }, {})

                resolve({ ...userData, username: cognitoUser.username })
            })
        })
    })
}

export function signOut() {
    const cognitoUser = userPool.getCurrentUser()
    if (cognitoUser) {
        cognitoUser.signOut()
    }
}