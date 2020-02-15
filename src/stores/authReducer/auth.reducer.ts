import { AuthState } from "./auth.state"
import { AuthActionTypes, AUTH_OPEN, AUTH_CLOSE, AUTH_CONNECTED, AUTH_INVALID, AUTH_DISCONNECTED } from "./auth.actions"

export const defaultAuthState: AuthState  = {
  isConnected: false,
  isOpened: false,
  isInvalid: false,
}

export function authReducer(state: AuthState = defaultAuthState, action: AuthActionTypes) {
  switch (action.type) {
    case AUTH_OPEN:
      return { ...state, isOpened: true }
    case AUTH_CLOSE:
      return { ...state, isOpened: false }
    case AUTH_CONNECTED:
      return { ...state, isConnected: true }
    case AUTH_INVALID:
      return { ...state, isInvalid: true }
    case AUTH_DISCONNECTED:
      return defaultAuthState;
    default:
      return state
  }
}
