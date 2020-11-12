// functions defining functionality of the components that are being used in the app

// importing type to this file

import * as Types from './types';

// add loginUser action

export const loginUser = ( username, password) => {
    return {
        type: Types.LOGIN_USER,
        username,
        password
    }
}