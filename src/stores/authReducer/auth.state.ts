import { User } from "models/User";

export class AuthState {
  constructor(
    public Loading: boolean,
    public ErrorMessage: string,
    public IsOpen: boolean,
    public ConnectedUser?: User,
  ) {}
}
