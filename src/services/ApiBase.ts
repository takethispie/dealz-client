import axios from "axios";
import { authHeader } from "helpers/AuthHeaders";
import config from "Config";

const getAxios = () =>
  axios.create({ headers: authHeader(), baseURL: config.baseUrl });

export default getAxios