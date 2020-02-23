import { AuthState } from "./auth.state"
import { AuthActionTypes } from "./auth.actions"

export const defaultAuthState: AuthState  = {
  IsConnected: false,
  IsOpened: false,
  IsInvalid: false,
  ConnectedUser: null
}

export function authReducer(state: AuthState = defaultAuthState, action: AuthActionTypes) {
  switch (action.type) {
    
    

    default:
      return state
  }
}
