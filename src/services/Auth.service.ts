import { Credentials } from "models/Credentials";
import { User } from "models/User";
import { DateTime } from "luxon";

export const Login = async (credentials: Credentials) => {
    return Promise.resolve(new User("0", "jeanjako", DateTime.local()));
}