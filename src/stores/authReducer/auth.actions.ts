import { User } from "models/User";
import { Credentials } from "models/Credentials";

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_ERROR = "AUTH_LOGIN_ERROR";

export const AUTH_LOGOUT = "AUTH_LOGOUT"

interface AuthLogin {
    type: typeof AUTH_LOGIN,
    payload: {
        credentials: Credentials
    }
}

interface AuthLoginSuccess {
    type: typeof AUTH_LOGIN_SUCCESS,
    payload: {
        user: User
    }
}

interface AuthLoginError {
    type: typeof AUTH_LOGIN_ERROR,
    payload: {
        errorMessage: string
    }
}

interface AuthLogout {
    type: typeof AUTH_LOGOUT
}

export type AuthActionTypes = AuthLogin | AuthLoginSuccess | AuthLoginError | AuthLogout;

export function LoginAction(credentials: Credentials): AuthActionTypes {
    return {
        type: AUTH_LOGIN,
        payload: {
            credentials
        }
    }
}

export function LoginSuccessAction(user: User): AuthActionTypes {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: {
            user
        }
    }
}

export function LoginErrorAction(errorMessage: string): AuthActionTypes {
    return {
        type: AUTH_LOGIN_ERROR,
        payload: {
            errorMessage
        }
    }
}

export function LogoutAction(): AuthActionTypes {
    return {
        type: AUTH_LOGOUT
    }
}