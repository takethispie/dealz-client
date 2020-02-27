import { User } from "models/User";

export class AuthState {
  constructor(
    public Loading: boolean,
    public ErrorMessage: string,
    public ConnectedUser?: User
  ) {}
}
