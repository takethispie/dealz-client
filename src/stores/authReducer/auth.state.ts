import { User } from "models/User";

export class AuthState {
  constructor(
    public IsConnected: boolean,
    public IsOpened: boolean,
    public IsInvalid: boolean,
    public ConnectedUser: User | null
  ) {}
}
