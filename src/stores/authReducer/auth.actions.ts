export const AUTH_OPEN = 'AUTH_OPEN';
export const AUTH_CLOSE = 'AUTH_CLOSE';
export const AUTH_CONNECTED = 'AUTH_CONNECTED';
export const AUTH_INVALID = 'AUTH_INVALID';
export const AUTH_DISCONNECTED = 'AUTH_DISCONNECTED';

interface AuthOpen {
  type: typeof AUTH_OPEN
}

interface AuthClose {
    type: typeof AUTH_CLOSE
}

interface AuthConnected {
    type: typeof AUTH_CONNECTED
}

interface AuthInvalid {
    type: typeof AUTH_INVALID
}

interface AuthDisconnected {
    type: typeof AUTH_DISCONNECTED
}

export type AuthActionTypes = AuthOpen | AuthClose | AuthConnected | AuthInvalid | AuthDisconnected;