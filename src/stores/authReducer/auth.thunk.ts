import { AuthState } from "./auth.state";
import { Credentials } from "models/Credentials";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { LoginAction, LoginSuccessAction, LoginErrorAction, OpenAuth, CloseAuth, LogoutAction } from "./auth.actions";
import { Login } from "services/Auth.service";

export const ThunkLogin = (credentials: Credentials): 
ThunkAction<void, AuthState, unknown, Action<string>> => async dispatch => {
    try {
        dispatch(LoginAction(credentials));
        let response = await Login(credentials);
        dispatch(LoginSuccessAction(response));
        dispatch(CloseAuth());
    } catch (error) {
        dispatch(LoginErrorAction("Erreur lors du login"));
    }
}

export const ThunkOpenAuth = (): ThunkAction<void, AuthState, unknown, Action<string>> => async dispatch => {
    dispatch(OpenAuth());
}

export const ThunkCloseAuth = (): ThunkAction<void, AuthState, unknown, Action<string>> => async dispatch => {
    dispatch(CloseAuth());
}

export const ThunkLogout = (): ThunkAction<void, AuthState, unknown, Action<string>> => async dispatch => {
    dispatch(LogoutAction());
};