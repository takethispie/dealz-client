import { AuthState } from "./auth.state"
import { AuthActionTypes, AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR, AUTH_LOGOUT } from "./auth.actions"

export const defaultAuthState: AuthState  = {
  ErrorMessage: "",
  Loading: false,
  ConnectedUser: undefined
}

export function authReducer(state: AuthState = defaultAuthState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    
    case AUTH_LOGIN:
      return {...state, Loading: true};

    case AUTH_LOGIN_SUCCESS:
      return {...state, Loading: false, ConnectedUser: action.payload.user};

    case AUTH_LOGIN_ERROR:
      return {...state, Loading: false, ErrorMessage: action.payload.errorMessage};

    case AUTH_LOGOUT:
      return {...state, ConnectedUser: undefined};

    default:
      return state
  }
}
